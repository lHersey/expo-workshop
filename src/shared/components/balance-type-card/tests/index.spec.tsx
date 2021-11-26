import { render } from '@testing-library/react-native';
import { BalanceType } from 'shared/enum';
import Providers from 'shared/providers/test-providers';

import BalanceTypeCard from '../index';

describe('<BalanceTypeCard />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <BalanceTypeCard ammount={4000} type={BalanceType.EXPENSE} />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();
      const { queryByText } = render(
        <Providers>
          <BalanceTypeCard ammount={4000} type={BalanceType.EXPENSE} />
        </Providers>,
      );

      expect(queryByText('$4000.00')).toBeTruthy();
    });
  });
});
