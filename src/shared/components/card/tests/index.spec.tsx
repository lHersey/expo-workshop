import { render } from '@testing-library/react-native';
import Text from 'shared/components/text';
import Providers from 'shared/providers/test-providers';

import Card from '../index';

describe('<Card />', () => {
  describe('snapshots', () => {
    it('should match default snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <Card>
            <Text>Hello Card</Text>
          </Card>
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });

    it('should match gradient snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <Card gradient>
            <Text>Hello Card</Text>
          </Card>
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();
      const rendererd = render(
        <Providers>
          <Card>
            <Text>Hello Card</Text>
          </Card>
        </Providers>,
      );

      expect(rendererd.queryByText('Hello Card')).toBeTruthy();
    });
  });
});
