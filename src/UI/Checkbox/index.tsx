import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Checkbox = ({ id, label, error, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <input id={id} type="checkbox" {...props} className={styles.input} />
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

export default Checkbox;
