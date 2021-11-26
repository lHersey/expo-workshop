import { fireEvent, render, within } from '@testing-library/react-native';
import { CATEGORY_PICKER_MODAL_TEST_ID } from 'shared/components/category-picker-modal';
import { CREATE_TRANSACTION_ITEM_TEST_ID } from 'shared/components/create-transaction-item';
import Category from 'shared/models/category';
import Providers from 'shared/providers/test-providers';
import { RootState } from 'shared/store/hooks';
import { mockCategory, mockCategoryEntity } from 'shared/store/mock';

import CategoryPickerItem from '../index';

describe('<CategoryPickerItem />', () => {
  let state: Partial<RootState>;
  let categoryOne: Category;
  let categoryTwo: Category;

  beforeEach(() => {
    categoryOne = mockCategory({ id: '1', name: 'Category 1' });
    categoryTwo = mockCategory({ id: '2', name: 'Category 2' });
    state = {
      category: mockCategoryEntity(categoryOne, categoryTwo),
    };
  });

  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();

      const rendered = render(
        <Providers state={state}>
          <CategoryPickerItem value={categoryOne.id} onAccept={jest.fn()} />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();

      const { getByTestId } = render(
        <Providers state={state}>
          <CategoryPickerItem value={categoryOne.id} onAccept={jest.fn()} />
        </Providers>,
      );

      const { queryByText } = within(getByTestId(CREATE_TRANSACTION_ITEM_TEST_ID));

      expect(queryByText(categoryOne.name)).toBeTruthy();
    });

    it('should open modal onPress', () => {
      expect.hasAssertions();

      const handleOnPressMock = jest.fn();

      const { getByTestId, getByText } = render(
        <Providers state={state}>
          <CategoryPickerItem value={null} onAccept={handleOnPressMock} />
        </Providers>,
      );

      expect(getByTestId(CATEGORY_PICKER_MODAL_TEST_ID).props.visible).toBeFalsy(); //Cannot test visibility since the chiildren are always mounted

      const pressable = getByText(categoryTwo.name);
      fireEvent.press(pressable);

      expect(handleOnPressMock).toHaveBeenCalledWith(categoryTwo.id);
      expect(getByTestId(CATEGORY_PICKER_MODAL_TEST_ID).props.visible).toBeTruthy();
    });
  });
});
