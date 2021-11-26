import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import BalanceCard from 'shared/components/balance-card';
import TransactionList from 'shared/components/transaction-list';
import { useTheme } from 'styled-components/native';

import { Block, Container, Title } from './styles';

const Dashboard: FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Block>
        <Ionicons name="bar-chart" color={theme.PRIMARY_COLOR} size={24} />
        <Title text="Welcome to expenses!" />
      </Block>
      <BalanceCard />
      <TransactionList />
    </Container>
  );
};

export default Dashboard;
