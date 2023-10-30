import { Component } from 'react';
import Wrapper from '../Wrapper';
import ErrorButton from '../ErrorButton';
import Loader from '../Loader';
import CharactersList from '../CharactersList';
import { IMainProps } from '../../types';
import styles from './Main.module.scss';

class Main extends Component<IMainProps> {
  render() {
    const { characters, isLoading } = this.props;

    return (
      <main className={styles.main}>
        <Wrapper>
          <ErrorButton />
          {isLoading ? <Loader /> : <CharactersList characters={characters} />}
        </Wrapper>
      </main>
    );
  }
}

export default Main;
