import ReactHookForm from '../../components/ReactHookForm';
import styles from './ReactHookFormPage.module.scss';

const ReactHookFormPage = () => {
  return (
    <div className={styles.container}>
      <h1>React Hook Form</h1>
      <ReactHookForm />
    </div>
  );
};

export default ReactHookFormPage;
