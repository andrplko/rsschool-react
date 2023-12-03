import { InputHTMLAttributes } from 'react';
import styles from './RadioButton.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton = ({ id, label, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <input id={id} type="radio" {...props} className={styles.input} />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
