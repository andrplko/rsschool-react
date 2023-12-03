import { z } from 'zod';

const validationSchema = z
  .object({
    name: z
      .string({ required_error: 'Name is required' })
      .min(1, 'Name is required')
      .refine((value) => /^[A-Z][a-zA-Z0-9]*$/.test(value), {
        message: 'First letter should be capitalized',
      }),
    age: z
      .union(
        [
          z
            .string({ required_error: 'Age is required' })
            .min(1, 'Age is required'),
          z.number({ required_error: 'Age is required' }),
        ],
        {
          errorMap: () => ({
            message: 'Age is required',
          }),
        }
      )
      .pipe(z.coerce.number().int().nonnegative()),
    email: z
      .string({ required_error: 'Email is required' })
      .min(1, 'Email is required')
      .email('Please enter a valid email address'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(1, 'Password is required')
      .refine((value) => /^(?=.*[A-Z])/.test(value), {
        message: 'Password must contain 1 uppercase letter',
      })
      .refine((value) => /^(?=.*[a-z])/.test(value), {
        message: 'Password must contain 1 lowercase letter',
      })
      .refine((value) => /^(?=.*[0-9])/.test(value), {
        message: 'Password must contain 1 number',
      })
      .refine((value) => /^(?=.*[!@#\$%\^&\*])/.test(value), {
        message: 'Password must contain 1 special character',
      }),
    confirm_password: z
      .string({ required_error: 'Confirm password is required' })
      .min(1, { message: 'Confirm password is required' }),
    accept_terms: z
      .boolean({ required_error: 'Accept terms is required' })
      .refine((value) => value === true, {
        message: 'You must accept terms and conditions',
      }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ['confirm_password'],
    message: 'Passwords must match',
  });

export default validationSchema;
