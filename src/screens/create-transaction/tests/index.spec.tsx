import { render } from '@testing-library/react-native';
import MockDate from 'mockdate';
import Providers from 'shared/providers/test-providers';

import CreateTransaction from '../index';

describe('<CreateTransaction />', () => {
  beforeAll(() => {
    MockDate.set('2021-07-19T18:54:59.152Z');
  });

  afterAll(() => {
    MockDate.reset();
  });

  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <CreateTransaction />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });
});
