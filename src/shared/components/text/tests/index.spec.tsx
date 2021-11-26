import { render } from '@testing-library/react-native';
import Providers from 'shared/providers/test-providers';

import Text from '../index';

describe('<Text />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <Text>Hello Text</Text>
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
          <Text>Hello Text</Text>
        </Providers>,
      );

      expect(queryByText('Hello Text')).toBeTruthy();
    });
  });
});
