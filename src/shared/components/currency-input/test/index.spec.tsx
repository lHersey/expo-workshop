import { render } from '@testing-library/react-native';
import Providers from 'shared/providers/test-providers';

import CurrencyInput from '../index';

jest.useFakeTimers();

describe('<CurrencyInput />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <CurrencyInput value={2300.0} onChangeValue={jest.fn()} />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });
});
