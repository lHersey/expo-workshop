import { EntityId } from '@reduxjs/toolkit';
import { VFC } from 'react';
import { FlatListProps } from 'react-native';
import { useSelector } from 'shared/store/hooks';
import { transactionSelectors } from 'shared/store/reducers/transaction/reducer';

import TransactionItem from '../transaction-item';
import { Container, Diviver, Header, Title, TransactionFlatList, ViewAll } from './styles';

type ListType = VFC<FlatListProps<EntityId>>;

const TransactionList: VFC = () => {
  const transactionsIds = useSelector(state => transactionSelectors.selectIds(state));

  return (
    <Container>
      <Header>
        <Title>Transactions</Title>
        <ViewAll>View All</ViewAll>
      </Header>
      <TransactionFlatList<ListType>
        data={transactionsIds}
        keyExtractor={id => id.toString()}
        renderItem={({ item }) => <TransactionItem transactionId={item.toString()} />}
        ItemSeparatorComponent={Diviver}
      />
    </Container>
  );
};

export default TransactionList;
