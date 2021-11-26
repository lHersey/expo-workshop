import { useMemo } from 'react';
import { BalanceType } from 'shared/enum';
import { IoniconsName } from 'shared/types/icons';
import { useTheme } from 'styled-components/native';

type BalanceTypeData = {
  label: string;
  icon: IoniconsName;
  color: string;
};

export const useBalanceTypeInformation = (type: BalanceType) => {
  const theme = useTheme();
  const balancePayload = useMemo(
    () =>
      new Map<BalanceType, BalanceTypeData>([
        [BalanceType.EXPENSE, { label: 'Expenses', icon: 'arrow-up-circle-outline', color: theme.ERROR_COLOR }],
        [BalanceType.INCOME, { label: 'Income', icon: 'arrow-down-circle-outline', color: theme.SUCCESS_COLOR }],
      ]),
    [theme],
  );

  return balancePayload.get(type);
};
