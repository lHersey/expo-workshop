import { FC } from 'react';
import { BalanceType } from 'shared/enum';
import { useExpensesBalanceSelector, useIncomeBalanceSelector } from 'shared/store/selectors/balanceSelectors';

import BalanceTypeCard from '../balance-type-card';
import Card from '../card';
import { AmmountLabel, BalanceTypeContainer, Container, TextContainer, Title } from './styles';

const BalanceCard: FC = () => {
  const expensesAmmount = useExpensesBalanceSelector();
  const incomeAmmount = useIncomeBalanceSelector();

  return (
    <Container>
      <Card gradient>
        <TextContainer>
          <Title>Total Balance</Title>
        </TextContainer>
        <TextContainer>
          <AmmountLabel>${incomeAmmount - expensesAmmount}</AmmountLabel>
        </TextContainer>
        <BalanceTypeContainer>
          <BalanceTypeCard type={BalanceType.INCOME} ammount={incomeAmmount} />
          <BalanceTypeCard type={BalanceType.EXPENSE} ammount={expensesAmmount} />
        </BalanceTypeContainer>
      </Card>
    </Container>
  );
};

export default BalanceCard;
