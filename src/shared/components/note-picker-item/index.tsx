import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { useTheme } from 'styled-components/native';

import { Container, TextInput } from './styles';

type Props = {
  onChange: (text: string) => void;
  value: string;
};

const NotePickerItem: FC<Props> = props => {
  const { value, onChange } = props;
  const theme = useTheme();

  return (
    <Container>
      <Ionicons color={theme.TEXT_COLOR_GRAY} name="book" size={20} />
      <TextInput placeholder="Notes" value={value} onChangeText={onChange} />
    </Container>
  );
};

export default NotePickerItem;
