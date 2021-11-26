import { useNavigation } from '@react-navigation/core';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'shared/hooks/useForm';
import Transaction from 'shared/models/transaction';
import ToastService from 'shared/services/toast';
import { transactionAdded } from 'shared/store/reducers/transaction/reducer';
import shortid from 'shortid';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  ammount: yup.number().positive().required(),
  date: yup.date().required(),
  category: yup.string().required(),
  notes: yup.string().required().max(128),
});

type TransactionPayload = {
  ammount: number;
  date: string;
  category?: string;
  notes: string;
};

const initialValues: TransactionPayload = {
  ammount: 0,
  date: new Date().toISOString(),
  notes: '',
  category: undefined,
};

export function useTransactionForm() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = useCallback(
    (values: TransactionPayload) => {
      const { date, ammount, notes, category } = values;

      if (!category) {
        ToastService.showWarning('Select a category');
        return;
      }

      dispatch(transactionAdded(new Transaction(shortid.generate(), date, ammount, notes, category)));
      navigation.goBack();
    },
    [dispatch, navigation],
  );

  return useForm({
    initialValues,
    clearAfterSubmit: true,
    validationSchema,
    onSubmit: handleSubmit,
  });
}
