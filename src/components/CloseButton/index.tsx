import { useRouter } from 'next/router';
import Image from 'next/image';
import CloseIcon from '/public/close-icon.svg';
import removeQueryParams from 'utils/removeQueryParams';
import styles from './CloseButton.module.scss';

const CloseButton = () => {
  const router = useRouter();

  const handleClick = () => {
    removeQueryParams(router, 'id');
  };

  return (
    <div className={styles.container} data-testid="close-button">
      <button type="button" onClick={handleClick} className={styles.button}>
        <Image src={CloseIcon} alt="close icon" className={styles.image} />
      </button>
    </div>
  );
};

export default CloseButton;
