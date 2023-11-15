import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '../../assets/close-icon.svg';
import { Routes } from '../../router/routes';
import styles from './CloseButton.module.scss';

const CloseButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;

  const handleClick = () => {
    navigate(`${Routes.index}${search}`);
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClick} className={styles.button}>
        <img src={CloseIcon} alt="close icon" className={styles.image} />
      </button>
    </div>
  );
};

export default CloseButton;
