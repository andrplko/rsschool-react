import { Component } from 'react';
import Logo from '../../assets/logo.svg';
import Wrapper from '../Wrapper';
import SearchBar from '../SearchBar';
import { ISearchTermProps } from '../../types';
import styles from './Header.module.scss';

class Header extends Component<ISearchTermProps> {
  render() {
    const { setSearchTerm } = this.props;

    return (
      <header className={styles.header}>
        <Wrapper>
          <div className={styles.container}>
            <img src={Logo} alt="logo" className={styles.logo} />
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>
        </Wrapper>
      </header>
    );
  }
}

export default Header;
