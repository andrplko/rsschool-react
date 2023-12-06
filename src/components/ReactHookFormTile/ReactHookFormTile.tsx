import { useAppSelector } from '../../store';
import styles from './ReactHookFormTile.module.scss';

const ReactHookFormTile = () => {
  const { name, age, email, password, gender, country, picture } =
    useAppSelector((state) => state.ReactHookForm);

  return (
    <div className={styles.container}>
      <h2>React Hook Form Tile</h2>
      {picture && (
        <div className={styles.wrapper}>
          <img src={picture} alt="picture" className={styles.image} />
        </div>
      )}
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Email: {email}</div>
      <div>Password: {password}</div>
      <div>Gender: {gender}</div>
      <div>Country: {country}</div>
    </div>
  );
};

export default ReactHookFormTile;
