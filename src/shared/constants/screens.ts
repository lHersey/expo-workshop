export enum Screens {
  HOME = 'Home',
  DASHBOARD_TAB = 'DashboardTab',
  CREATE_TRANSACTION_TAB = 'CreateTransactionTab',
}

export const ScreensTitles: Record<string, string> = {
  [Screens.HOME]: 'Dashboard!',
  [Screens.DASHBOARD_TAB]: 'Welcome to expenses!',
  [Screens.CREATE_TRANSACTION_TAB]: 'Create Transaction',
};
