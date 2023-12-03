import UncontrolledForm from '../../components/UncontrolledForm';
import styles from './UncontrolledFormPage.module.scss';

const UncontrolledFormPage = () => {
  return (
    <div className={styles.container}>
      <h2>Uncontrolled Form</h2>
      <UncontrolledForm />
    </div>
  );
};

export default UncontrolledFormPage;
