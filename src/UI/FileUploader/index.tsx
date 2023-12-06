import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './FileUploader.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  registration?: Partial<UseFormRegisterReturn>;
}

const FileUploader = ({
  id,
  label,
  error,
  registration,
  ...props
}: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
        <input
          id={id}
          type="file"
          {...registration}
          {...props}
          className={styles.input}
        />
      </label>
      <p className={styles.error} role="alert">
        {error && error}
      </p>
    </div>
  );
};

export default FileUploader;
