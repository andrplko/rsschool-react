import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { ApiCharactersData, PlaceholderProps, IAppState } from './types';
import { LOCAL_STORAGE_SEARCH_TERM } from './constants';
import { fetchCharacters } from './services/apiService';
import styles from './App.module.scss';

class App extends Component {
  state: IAppState = {
    searchTerm: localStorage.getItem(LOCAL_STORAGE_SEARCH_TERM) || '',
    characters: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchCharactersData();
  }

  componentDidUpdate(_prevProps: PlaceholderProps, prevState: IAppState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.fetchCharactersData();
    }
  }

  fetchCharactersData = () => {
    this.setState({ isLoading: true });

    fetchCharacters(this.state.searchTerm)
      .then((data: ApiCharactersData) => {
        this.setState({ characters: data?.results, isLoading: false });
      })
      .catch(() => {
        this.setState({ characters: [], isLoading: false });
      });
  };

  setSearchTerm = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  render() {
    const { characters, isLoading } = this.state;

    return (
      <div className={styles.container}>
        <Header setSearchTerm={this.setSearchTerm} />
        <Main characters={characters} isLoading={isLoading} />
      </div>
    );
  }
}

export default App;
