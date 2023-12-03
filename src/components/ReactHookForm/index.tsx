import { SubmitHandler, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../UI/Button';
import Form from './components/Form';
import validationSchema from '../../utils/validationSchema';
import PasswordStrengthChecker from '../../UI/PasswordStrengthChecker';
import { useAppDispatch } from '../../store';
import { setReactHookFormData } from '../../store/slices/ReactHookForm';
import { Routes } from '../../router/routes';
import { AutoComplete } from '../../UI/AutoComplete';
import { transformFormData } from '../../utils/transformFormData';
import styles from './ReactHookForm.module.scss';

interface FormFields extends FieldValues {
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
  gender: string;
  picture: string;
  accept_terms: boolean;
}

const ReactHookForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const transformedData = await transformFormData(data);
    dispatch(setReactHookFormData(transformedData));
    navigate(Routes.Main);
  };

  return (
    <div className={styles.container}>
      <Form<FormFields> schema={validationSchema} onSubmit={onSubmit}>
        {({ register, watch, formState: { errors, isDirty, isValid } }) => (
          <>
            <div className={styles.wrapper}>
              <label htmlFor="name" className={styles.label}>
                Name
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                  className={styles.input}
                />
              </label>
              <p className={styles.error}>{errors.name?.message}</p>
            </div>

            <div className={styles.wrapper}>
              <label htmlFor="age" className={styles.label}>
                Age
                <input
                  id="age"
                  type="number"
                  placeholder="Age"
                  {...register('age')}
                  className={styles.input}
                />
              </label>
              <p className={styles.error}>{errors.age?.message}</p>
            </div>

            <div className={styles.wrapper}>
              <label htmlFor="email" className={styles.label}>
                Email
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  className={styles.input}
                />
              </label>
              <p className={styles.error}>{errors.email?.message}</p>
            </div>

            <div className={styles.wrapper}>
              <label htmlFor="password" className={styles.label}>
                Password
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register('password')}
                  className={styles.input}
                />
              </label>
              <PasswordStrengthChecker password={watch().password} />
              <p className={styles.error}>{errors.password?.message}</p>
            </div>

            <div className={styles.wrapper}>
              <label htmlFor="confirm_password" className={styles.label}>
                Confirm password
                <input
                  id="confirm_password"
                  type="password"
                  placeholder="Confirm password"
                  {...register('confirm_password')}
                  className={styles.input}
                />
              </label>
              <p className={styles.error}>{errors.confirm_password?.message}</p>
            </div>

            <AutoComplete />
            <div className={styles.wrapperTerms}>
              <label htmlFor="gender-female" className={styles.label}>
                <input
                  id="gender-female"
                  value="female"
                  type="radio"
                  defaultChecked
                  {...register('gender')}
                  className={styles.input}
                />
                Female
              </label>
              <p className={styles.error}>{errors.gender?.message}</p>
            </div>

            <div className={styles.wrapperTerms}>
              <label htmlFor="gender-male" className={styles.label}>
                <input
                  id="gender-male"
                  value="male"
                  type="radio"
                  {...register('gender')}
                  className={styles.input}
                />
                Male
              </label>
              <p className={styles.error}>{errors.gender?.message}</p>
            </div>

            <div className={styles.wrapper}>
              <label htmlFor="picture" className={styles.label}>
                Choose a picture
                <input
                  id="picture"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  {...register('picture')}
                  className={styles.input}
                />
              </label>
              <p className={styles.error}>{errors.picture?.message}</p>
            </div>

            <div className={styles.wrapperTerms}>
              <label htmlFor="accept_terms" className={styles.label}>
                <input
                  id="accept_terms"
                  type="checkbox"
                  {...register('accept_terms')}
                  className={styles.input}
                />
                I agree to the terms and conditions
              </label>
              <p className={styles.error}>{errors.accept_terms?.message}</p>
            </div>

            <Button type="submit" disabled={!isDirty || !isValid}>
              Submit
            </Button>
          </>
        )}
      </Form>
    </div>
  );
};

export default ReactHookForm;
