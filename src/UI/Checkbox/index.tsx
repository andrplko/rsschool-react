import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Checkbox.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  registration?: Partial<UseFormRegisterReturn>;
}

const Checkbox = ({ id, label, registration, error, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        <input
          id={id}
          type="checkbox"
          {...registration}
          {...props}
          className={styles.input}
        />
        {label}
      </label>
      <p className={styles.error} role="alert">
        {error && error}
      </p>
    </div>
  );
};

export default Checkbox;
