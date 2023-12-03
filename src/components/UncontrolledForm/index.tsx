import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ZodError } from 'zod';
import Input from '../../UI/Input';
import Checkbox from '../../UI/Checkbox';
import RadioButton from '../../UI/RadioButton';
import { inputProps } from '../../constants/inputProps';
import Button from '../../UI/Button';
import { AutoComplete } from '../../UI/AutoComplete';
import { useAppDispatch } from '../../store';
import { setUncontrolledFormData } from '../../store/slices/UncontrolledForm';
import transformFormData from '../../utils/transformFormData';
import { Routes } from '../../router/routes';
import validationSchema from '../../utils/validationSchema';
import styles from './UncontrolledForm.module.scss';

const UncontrolledForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleOneLevelZodError = ({ issues }: ZodError<unknown>) => {
    return issues.reduce((acc: Record<string, string>, cur) => {
      acc[cur.path[0]] = cur.message;
      return acc;
    }, {});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const transformedData = await transformFormData(formData);
    if (passwordRef.current) {
      passwordRef.current.value = transformedData.password;
    }

    try {
      validationSchema.parse(transformedData);
    } catch (error) {
      if (error instanceof ZodError) {
        const handledError = handleOneLevelZodError(error);
        setErrors(handledError);
      }
    }

    if (Object.keys(errors).length) {
      dispatch(setUncontrolledFormData(transformedData));
      navigate(Routes.Main);
    }
  };

  return (
    <div className={styles.container}>
      <form noValidate onSubmit={handleSubmit} className={styles.form}>
        {inputProps.map((input) => {
          if (input.name === 'password') {
            return (
              <Input
                key={input.id}
                ref={passwordRef}
                passwordValue={passwordRef.current?.value}
                error={errors[input.name]}
                {...input}
              />
            );
          }
          return <Input key={input.id} error={errors[input.name]} {...input} />;
        })}
        <AutoComplete />
        <RadioButton
          id="female"
          name="gender"
          value="female"
          label="Female"
          defaultChecked
        />
        <RadioButton id="male" name="gender" value="male" label="Male" />
        <Checkbox
          id="accept_terms"
          name="accept_terms"
          label="I agree to the terms and conditions"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
