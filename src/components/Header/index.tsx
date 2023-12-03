import { NavLink } from 'react-router-dom';
import Wrapper from '../Wrapper';
import { Routes } from '../../router/routes';
import styles from './Header.module.scss';

const navLinks = [
  { to: Routes.Main, label: 'Main' },
  { to: Routes.UncontrolledForm, label: 'Uncontrolled Form' },
  { to: Routes.ReactHookForm, label: 'React Hook Form' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {navLinks.map(({ to, label }) => (
              <li key={to} className={styles.listItem}>
                <NavLink to={to} className={styles.link}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;
