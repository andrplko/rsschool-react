import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './RadioButton.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  registration?: Partial<UseFormRegisterReturn>;
}

const RadioButton = ({
  id,
  label,
  registration,
  error,
  ...props
}: InputProps) => {
  return (
    <div className={styles.container}>
      <input
        id={id}
        type="radio"
        {...registration}
        {...props}
        className={styles.input}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default RadioButton;
