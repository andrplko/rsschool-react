import LogoImage from '/public/logo.svg';
import Image from 'next/image';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.container}>
      <Image
        src={LogoImage}
        width={90}
        height={90}
        alt="logo"
        className={styles.image}
      />
      <h1 className={styles.title}>Find Music</h1>
    </div>
  );
};

export default Logo;
