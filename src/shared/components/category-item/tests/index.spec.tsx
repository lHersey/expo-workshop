import { fireEvent, render } from '@testing-library/react-native';
import Category from 'shared/models/category';
import Providers from 'shared/providers/test-providers';
import { RootState } from 'shared/store/hooks';
import { mockCategory, mockCategoryEntity } from 'shared/store/mock';

import CategoryItem, { CATEGORY_ITEM_TEST_ID } from '../index';

describe('<CategoryItem />', () => {
  let state: Partial<RootState>;
  let category: Category;

  beforeEach(() => {
    category = mockCategory();
    state = {
      category: mockCategoryEntity(category),
    };
  });

  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers state={state}>
          <CategoryItem categoryId={category.id} onPress={jest.fn()} />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();

      const { queryByText } = render(
        <Providers state={state}>
          <CategoryItem categoryId={category.id} onPress={jest.fn()} />
        </Providers>,
      );

      expect(queryByText(category.name)).toBeTruthy();
    });

    it('should handle onPress', () => {
      expect.hasAssertions();

      const handleOnPressMock = jest.fn();

      const { getByTestId } = render(
        <Providers state={state}>
          <CategoryItem categoryId={category.id} onPress={handleOnPressMock} />
        </Providers>,
      );

      const pressable = getByTestId(CATEGORY_ITEM_TEST_ID);
      fireEvent.press(pressable);

      expect(handleOnPressMock).toHaveBeenCalledWith(category.id);
    });
  });
});
