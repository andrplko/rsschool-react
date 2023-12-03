import { InputHTMLAttributes } from 'react';
import styles from './FileUploader.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FileUploader = ({ id, label, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
        <input id={id} type="file" {...props} className={styles.input} />
      </label>
    </div>
  );
};

export default FileUploader;
