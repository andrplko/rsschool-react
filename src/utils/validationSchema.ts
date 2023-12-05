import { z } from 'zod';

const MAX_FILE_SIZE = 1024 * 1024 * 3;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

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
    gender: z
      .string({ required_error: 'Gender is required' })
      .min(1, { message: 'Please select a gender' }),
    accept_terms: z.union([
      z.literal('on').transform(() => true),
      z
        .literal(undefined)
        .transform(() => false)
        .refine((value) => value, {
          message: 'You must accept terms and conditions',
        }),
      z
        .boolean({ required_error: 'Accept terms is required' })
        .refine((value) => value, {
          message: 'You must accept terms and conditions',
        }),
    ]),
    picture: z.union([
      z
        .any()
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 3MB.`)
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
          'Only .jpg, .jpeg, .png formats are supported.'
        ),
      z
        .any()
        .refine(
          (files) => files?.[0]?.size <= MAX_FILE_SIZE,
          `Max image size is 3MB.`
        )
        .refine(
          (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
          'Only .jpg, .jpeg, .png formats are supported.'
        ),
    ]),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ['confirm_password'],
    message: 'Passwords must match',
  });

export default validationSchema;
