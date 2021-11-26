import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { useCallback } from 'react';
import { colorAdjust } from 'shared/hooks';
import { useSelector } from 'shared/store/hooks';
import { categoriesSelector } from 'shared/store/reducers/category/reducer';

import { Container, IconContainer, Label } from './styles';

type Props = {
  categoryId: string;
  onPress: (id?: string) => void;
};

const CategoryItem: FC<Props> = props => {
  const { categoryId, onPress } = props;
  const category = useSelector(state => categoriesSelector.selectById(state, categoryId));

  const handleOnPress = useCallback(() => onPress(categoryId), [categoryId, onPress]);

  if (!category) return null;

  return (
    <Container onPress={handleOnPress} testID={CATEGORY_ITEM_TEST_ID}>
      <IconContainer color={category.color}>
        <Ionicons name={category.icon} color={colorAdjust(category.color, -30)} size={30} />
      </IconContainer>
      <Label>{category.name}</Label>
    </Container>
  );
};

export const CATEGORY_ITEM_TEST_ID = 'CATEGORY_ITEM';

export default CategoryItem;
