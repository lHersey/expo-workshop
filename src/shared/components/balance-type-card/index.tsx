import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { PressableProps } from 'react-native';
import { BalanceType } from 'shared/enum';

import { useBalanceTypeInformation } from './hooks';
import { BalanceAmmount, BalanceLabelsContainer, BalanceTitle, Pressable } from './styles';

type Props = PressableProps & {
  type: BalanceType;
  ammount: number;
};

const BalanceTypeCard: FC<Props> = props => {
  const { ammount, type } = props;
  const balanceInfo = useBalanceTypeInformation(type);

  return (
    <Pressable>
      <Ionicons name={balanceInfo?.icon} color={balanceInfo?.color} size={32} />
      <BalanceLabelsContainer>
        <BalanceTitle>{balanceInfo?.label}</BalanceTitle>
        <BalanceAmmount>${ammount}.00</BalanceAmmount>
      </BalanceLabelsContainer>
    </Pressable>
  );
};

export default BalanceTypeCard;
