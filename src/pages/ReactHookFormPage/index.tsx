import ReactHookForm from '../../components/ReactHookForm';
import styles from './ReactHookFormPage.module.scss';

const ReactHookFormPage = () => {
  return (
    <div className={styles.container}>
      <h2>React Hook Form</h2>
      <ReactHookForm />
    </div>
  );
};

export default ReactHookFormPage;
