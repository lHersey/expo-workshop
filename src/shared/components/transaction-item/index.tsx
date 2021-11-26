import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { shallowEqual } from 'react-redux';
import { useColorAdjust } from 'shared/hooks';
import { useSelector } from 'shared/store/hooks';
import { categoriesSelector } from 'shared/store/reducers/category/reducer';
import { transactionSelectors } from 'shared/store/reducers/transaction/reducer';
import { useTheme } from 'styled-components/native';

import { AmmountLabel, CategoryName, Container, DateLabel, IconOverlay, IconWithName, ValuesContainer } from './styles';

type Props = {
  transactionId: string;
};

const TransactionItem: FC<Props> = props => {
  const { transactionId } = props;
  const theme = useTheme();

  const transaction = useSelector(state => transactionSelectors.selectById(state, transactionId), shallowEqual)!;
  const category = useSelector(state => categoriesSelector.selectById(state, transaction.category), shallowEqual)!;

  const colors = [useColorAdjust(theme.PRIMARY_COLOR, 60), theme.PRIMARY_COLOR];

  return (
    <Container>
      <IconWithName>
        <IconOverlay colors={colors}>
          <Ionicons size={23} color={theme.WHITE} name={category?.icon} />
        </IconOverlay>
        <CategoryName text={category.name} />
      </IconWithName>
      <ValuesContainer>
        <AmmountLabel text={`$${transaction.ammount}`} />
        <DateLabel text={new Date(transaction.date).toDateString()} />
      </ValuesContainer>
    </Container>
  );
};

export default TransactionItem;
