import { InputHTMLAttributes, MutableRefObject, forwardRef } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import PasswordStrengthChecker from '../PasswordStrengthChecker';
import styles from './Input.module.scss';

interface FormFields extends FieldValues {
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
  accept_terms: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  ref?: MutableRefObject<HTMLInputElement>;
  register?: UseFormRegister<FormFields>;
  error?: string;
  passwordValue?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, label, register, error, passwordValue, ...props }, ref) => {
    return (
      <div className={styles.container}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          name={name}
          {...(register && register(name))}
          {...props}
          ref={ref}
          className={styles.input}
        />
        {name === 'password' && (
          <PasswordStrengthChecker password={passwordValue} />
        )}
        <p className={styles.error} role="alert">
          {error && error}
        </p>
      </div>
    );
  }
);

export default Input;
