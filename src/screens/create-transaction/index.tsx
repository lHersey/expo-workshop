import { FC } from 'react';
import CategoryPickerItem from 'shared/components/category-picker-item';
import CurrencyInput from 'shared/components/currency-input';
import DatePickerItem from 'shared/components/date-picker-item';
import NotePickerItem from 'shared/components/note-picker-item';

import { useTransactionForm } from './hooks';
import { ButtonCreate, ButtonText, Container, Pressable, Title } from './styles';

const CreateTransaction: FC = () => {
  const form = useTransactionForm();

  return (
    <Container>
      <Title>New Transaction</Title>
      <CurrencyInput value={form.values.ammount} onChangeValue={v => form.setFieldValue('ammount', v)} />
      <NotePickerItem value={form.values.notes} onChange={form.handleChange('notes')} />
      <CategoryPickerItem value={form.values.category} onAccept={form.handleChange('category')} />
      <DatePickerItem value={form.values.date} onAccept={form.handleChange('date')} />
      <Pressable onPress={form.handleSubmit}>
        <ButtonCreate gradient>
          <ButtonText>Create</ButtonText>
        </ButtonCreate>
      </Pressable>
    </Container>
  );
};

export default CreateTransaction;
