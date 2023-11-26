import Wrapper from '../Wrapper';
import ErrorButton from '../ErrorButton';
import SearchBar from '../SearchBar';
import Logo from '../Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.container}>
          <Logo />
          <SearchBar />
          <ErrorButton />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
