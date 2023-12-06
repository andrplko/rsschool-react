import ReactHookFormTile from '../../components/ReactHookFormTile/ReactHookFormTile';
import UncontrolledFormTile from '../../components/UncontrolledFormTile';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <UncontrolledFormTile />
      <ReactHookFormTile />
    </div>
  );
};

export default MainPage;
