import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { IoniconsName } from 'shared/types/icons';
import { useTheme } from 'styled-components/native';

import { Label, Pressable } from './styles';

type Props = {
  icon: IoniconsName;
  label: string;
  onPress: () => void;
};

const CreateTransactionItem: FC<Props> = props => {
  const { icon, label, onPress } = props;
  const theme = useTheme();

  return (
    <Pressable onPress={onPress} testID={CREATE_TRANSACTION_ITEM_TEST_ID}>
      <Ionicons color={theme.TEXT_COLOR_GRAY} name={icon} size={20} />
      <Label text={label} />
    </Pressable>
  );
};

export const CREATE_TRANSACTION_ITEM_TEST_ID = 'CREATE_TRANSACTION_ITEM_TEST_ID';

export default CreateTransactionItem;
