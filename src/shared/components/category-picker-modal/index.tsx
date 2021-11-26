import { FC } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { useSelector } from 'shared/store/hooks';
import { categoriesSelector } from 'shared/store/reducers/category/reducer';

import CategoryItem from '../category-item';
import { Container } from './styles';

type Props = {
  isVisible: boolean;
  value?: string | null;
  onAccept: (value: string) => void;
};

const CategoryPickerModal: FC<Props> = props => {
  const { isVisible, onAccept } = props;
  const categories = useSelector(state => categoriesSelector.selectIds(state));

  return (
    <Modal isVisible={isVisible} testID={CATEGORY_PICKER_MODAL_TEST_ID}>
      <Container>
        <ScrollView>
          {categories.map(id => (
            <CategoryItem key={id} categoryId={id.toString()} onPress={onAccept as never} />
          ))}
        </ScrollView>
      </Container>
    </Modal>
  );
};

export const CATEGORY_PICKER_MODAL_TEST_ID = 'CATEGORY_PICKER_MODAL_TEST_ID';

export default CategoryPickerModal;
