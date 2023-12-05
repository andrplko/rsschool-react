import { SubmitHandler, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../UI/Button';
import Form from './components/Form';
import validationSchema from '../../utils/validationSchema';
import { useAppDispatch } from '../../store';
import { setReactHookFormData } from '../../store/slices/ReactHookForm';
import { Routes } from '../../router/routes';
import { transformFormData } from '../../utils/transformFormData';
import Input from './components/Input';
import RadioButton from '../../UI/RadioButton';
import Checkbox from '../../UI/Checkbox';
import FileUploader from '../../UI/FileUploader';
import { AutoComplete } from '../../UI/AutoComplete';
import PasswordStrengthChecker from '../../UI/PasswordStrengthChecker';
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
        {({ register, formState: { errors, isDirty, isValid }, watch }) => (
          <>
            <Input
              id="name"
              label="Name"
              type="text"
              placeholder="Name"
              registration={register('name')}
              error={errors.name}
            />
            <Input
              id="age"
              label="Age"
              type="number"
              placeholder="Age"
              registration={register('age')}
              error={errors.age}
            />
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Email"
              registration={register('email')}
              error={errors.email}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Password"
              registration={register('password')}
              error={errors.password}
            />
            <PasswordStrengthChecker password={watch().password} />
            <Input
              id="confirm_password"
              label="Confirm password"
              type="password"
              placeholder="Confirm password"
              defaultChecked
              registration={register('confirm_password')}
              error={errors.confirm_password}
            />
            <AutoComplete />
            <div className={styles.wrapper}>
              <RadioButton
                id="female"
                name="gender"
                value="female"
                label="Female"
                registration={register('gender')}
                error={errors.gender?.message}
                defaultChecked
              />
              <RadioButton
                id="male"
                name="gender"
                value="male"
                label="Male"
                registration={register('gender')}
                error={errors.gender?.message}
              />
            </div>
            <FileUploader
              id="picture"
              label="Choose a picture"
              type="file"
              accept=".jpg, .jpeg, .png"
              registration={register('picture')}
              error={errors.picture?.message}
            />
            <Checkbox
              id="accept_terms"
              name="accept_terms"
              label="I agree to the terms and conditions"
              registration={register('accept_terms')}
              error={errors.accept_terms?.message}
            />
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
