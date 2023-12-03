import { InputHTMLAttributes } from 'react';
import styles from './RadioButton.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const RadioButton = ({ id, label, error, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <input id={id} type="radio" {...props} className={styles.input} />
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
