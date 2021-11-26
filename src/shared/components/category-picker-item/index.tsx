import { FC } from 'react';
import { useModalState } from 'shared/hooks';
import { useSelector } from 'shared/store/hooks';
import { categoriesSelector } from 'shared/store/reducers/category/reducer';

import CategoryPickerModal from '../category-picker-modal';
import CreateTransactionItem from '../create-transaction-item';

type Props = {
  value?: string | null;
  onAccept: (date: string) => void;
};

const CategoryPickerItem: FC<Props> = props => {
  const { value, onAccept } = props;
  const [isVisible, handleToggle] = useModalState();
  const category = useSelector(state => categoriesSelector.selectById(state, value ?? ''));

  const handleOnAccept = (categoryId: string) => {
    handleToggle();
    onAccept(categoryId);
  };

  return (
    <>
      <CategoryPickerModal isVisible={isVisible} value={value} onAccept={handleOnAccept} />
      <CreateTransactionItem onPress={handleToggle} label={category?.name ?? 'Select category'} icon="apps" />
    </>
  );
};

export default CategoryPickerItem;
