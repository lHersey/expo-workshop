import { FormikErrors, FormikHelpers, FormikTouched, useFormik } from 'formik';
import { createRef, RefObject, useCallback, useMemo } from 'react';
import * as yup from 'yup';

type FormType<T extends Record<string, unknown>> = T;

type Focusable = { focus: () => void };

type FormOptions<T extends Record<string, unknown>> = {
  initialValues: T;
  validationSchema: yup.AnyObjectSchema;
  validateOnMount?: boolean;
  clearAfterSubmit?: boolean;
  onSubmit: (values: FormType<T>, formikBag: FormikHelpers<T>) => void;
};

export const useForm = <T extends Record<string, unknown>>(options: FormOptions<T>) => {
  const { initialValues, onSubmit, validationSchema, validateOnMount, clearAfterSubmit } = options;

  const refs = useRefsMemo<T>(initialValues);

  const handleSubmitEditing = useCallback(
    (fieldToFocus?: keyof T) => () => {
      if (!fieldToFocus) return;

      refs[fieldToFocus]?.current?.focus();
    },
    [refs],
  );

  const handleRef = useCallback((name: keyof T) => refs[name], [refs]);

  const form = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount,
  });

  const handleSubmit = useCallback(async () => {
    await form.submitForm();
    if (clearAfterSubmit) {
      form.resetForm(initialValues);
    }
  }, [form, clearAfterSubmit, initialValues]);

  const errors = useTouchedErrors<T>(form.errors, form.touched);

  return {
    errors,
    refs,
    values: form.values,
    isValid: form.isValid,
    isSubmitting: form.isSubmitting,
    resetForm: form.resetForm,
    handleBlur: form.handleBlur,
    handleChange: form.handleChange,
    setFieldValue: form.setFieldValue,
    handleSubmit,
    handleSubmitEditing,
    handleRef,
  };
};

//We will pass only errors for touched inputs
function useTouchedErrors<T extends Record<string, unknown>>(errors: FormikErrors<T>, touched: FormikTouched<T>) {
  return Object.keys(errors).reduce((memo, key) => {
    memo[key as keyof T] = touched[key] ? (errors[key] as string) : undefined;

    return memo;
  }, {} as Record<keyof T, string | undefined>);
}

// We will create a ref for each object in the form (Each key of initial values)
function useRefsMemo<T extends Record<string, unknown>>(initialValues: T) {
  return useMemo(() => {
    return Object.keys(initialValues).reduce((memo, key) => {
      memo[key as keyof T] = createRef<Focusable>();
      return memo;
    }, {} as Record<keyof T, RefObject<Focusable>>);
  }, [initialValues]);
}
