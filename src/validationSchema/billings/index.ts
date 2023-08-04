import * as yup from 'yup';

export const billingValidationSchema = yup.object().shape({
  invoice_amount: yup.number().integer().nullable(),
  sales_summary: yup.string().nullable(),
  note: yup.string().nullable(),
});
