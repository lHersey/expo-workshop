import { render } from '@testing-library/react-native';
import Providers from 'shared/providers/test-providers';

import Dashboard from '../index';

describe('<Dashboard />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <Dashboard />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });
});
