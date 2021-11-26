import { fireEvent, render } from '@testing-library/react-native';
import { CATEGORY_ITEM_TEST_ID } from 'shared/components/category-item';
import Providers from 'shared/providers/test-providers';
import { mockCategory, mockCategoryEntity } from 'shared/store/mock';

import CategoryPickerModal from '../index';

describe('<CategoryPickerModal />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  describe('snapshots', () => {
    it('should match snapshot on visible modal', () => {
      expect.hasAssertions();

      const categoryOne = mockCategory({ name: 'CategoryOne', id: '1' });
      const categoryTwo = mockCategory({ name: 'CategoryTwo', id: '2' });
      const categoryThree = mockCategory({ name: 'CategoryThree', id: '3' });

      const state = {
        category: mockCategoryEntity(categoryOne, categoryTwo, categoryThree),
      };

      const rendered = render(
        <Providers state={state}>
          <CategoryPickerModal isVisible value={null} onAccept={jest.fn()} />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });

    it('should match snapshot with no visible modal', () => {
      expect.hasAssertions();

      const state = {
        category: mockCategoryEntity(),
      };

      const rendered = render(
        <Providers state={state}>
          <CategoryPickerModal isVisible={false} value={null} onAccept={jest.fn()} />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text of each category', () => {
      expect.hasAssertions();

      const categoryOne = mockCategory({ name: 'CategoryOne', id: '1' });
      const categoryTwo = mockCategory({ name: 'CategoryTwo', id: '2' });
      const categoryThree = mockCategory({ name: 'CategoryThree', id: '3' });

      const state = {
        category: mockCategoryEntity(categoryOne, categoryTwo, categoryThree),
      };

      const { queryByText } = render(
        <Providers state={state}>
          <CategoryPickerModal isVisible value={null} onAccept={jest.fn()} />
        </Providers>,
      );

      expect(queryByText(categoryOne.name)).toBeTruthy();
      expect(queryByText(categoryTwo.name)).toBeTruthy();
      expect(queryByText(categoryThree.name)).toBeTruthy();
    });

    it('should render all the categories', () => {
      expect.hasAssertions();

      const categoryOne = mockCategory({ name: 'CategoryOne', id: '1' });
      const categoryTwo = mockCategory({ name: 'CategoryTwo', id: '2' });
      const categoryThree = mockCategory({ name: 'CategoryThree', id: '3' });

      const state = {
        category: mockCategoryEntity(categoryOne, categoryTwo, categoryThree),
      };

      const { queryAllByTestId } = render(
        <Providers state={state}>
          <CategoryPickerModal isVisible value={null} onAccept={jest.fn()} />
        </Providers>,
      );

      expect(queryAllByTestId(CATEGORY_ITEM_TEST_ID)).toHaveLength(3);
    });

    it('should handle onPress', () => {
      expect.hasAssertions();

      const categoryOne = mockCategory({ name: 'CategoryOne', id: '1' });
      const categoryTwo = mockCategory({ name: 'CategoryTwo', id: '2' });
      const categoryThree = mockCategory({ name: 'CategoryThree', id: '3' });

      const state = {
        category: mockCategoryEntity(categoryOne, categoryTwo, categoryThree),
      };

      const handleOnAcceptMock = jest.fn();

      const { getByText } = render(
        <Providers state={state}>
          <CategoryPickerModal isVisible value={null} onAccept={handleOnAcceptMock} />
        </Providers>,
      );

      const pressable = getByText(categoryTwo.name);
      fireEvent.press(pressable);

      expect(handleOnAcceptMock).toHaveBeenCalledWith(categoryTwo.id);
    });
  });
});
