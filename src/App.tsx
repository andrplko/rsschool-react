import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from './store';
import { setCountries } from './store/slices/countries';
import Wrapper from './components/Wrapper';
import transformCountriesResponse from './utils/transformCountriesResponse';
import data from './constants/countries.json';
import styles from './App.module.scss';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const countries = transformCountriesResponse(data);
    dispatch(setCountries(countries));
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </>
  );
};

export default App;
