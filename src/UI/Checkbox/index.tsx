import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox = ({ id, label, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <input id={id} type="checkbox" {...props} className={styles.input} />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
