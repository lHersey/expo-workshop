import { fireEvent, render } from '@testing-library/react-native';
import Providers from 'shared/providers/test-providers';

import CreateTransactionItem, { CREATE_TRANSACTION_ITEM_TEST_ID } from '../index';

describe('<CreateTransactionItem />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <CreateTransactionItem label="Label" onPress={jest.fn()} icon="add-sharp" />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();

      const label = 'My label :)';

      const { queryByText } = render(
        <Providers>
          <CreateTransactionItem label={label} onPress={jest.fn()} icon="add-sharp" />
        </Providers>,
      );

      expect(queryByText(label)).toBeTruthy();
    });

    it('should handle onPress', () => {
      expect.hasAssertions();

      const handleOnPressMock = jest.fn();
      const { getByTestId } = render(
        <Providers>
          <CreateTransactionItem label="label" icon="add-sharp" onPress={handleOnPressMock} />
        </Providers>,
      );

      const pressable = getByTestId(CREATE_TRANSACTION_ITEM_TEST_ID);
      fireEvent.press(pressable);

      expect(handleOnPressMock).toHaveBeenCalledWith();
    });
  });
});
