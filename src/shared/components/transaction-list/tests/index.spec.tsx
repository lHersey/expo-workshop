import { render } from '@testing-library/react-native';
import Providers from 'shared/providers/test-providers';

import TransactionList from '../index';

describe('<TransactionList />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <TransactionList />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });
});
