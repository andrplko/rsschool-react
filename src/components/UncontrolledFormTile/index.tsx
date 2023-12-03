import { useAppSelector } from '../../store';
import styles from './UncontrolledFormTile.module.scss';

const UncontrolledFormTile = () => {
  const { name, age, email, password, gender, country, picture } =
    useAppSelector((state) => state.UncontrolledForm);

  return (
    <div className={styles.container}>
      <h2>Uncontrolled Form Tile</h2>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Email: {email}</div>
      <div>Password: {password}</div>
      <div>Gender: {gender}</div>
      <div>Country: {country}</div>
      {picture && (
        <div>
          Picture: <img src={picture} alt="picture" />
        </div>
      )}
    </div>
  );
};

export default UncontrolledFormTile;
