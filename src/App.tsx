import AppContextProvider from './context';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import './App.module.scss';

const App = () => {
  return (
    <AppContextProvider>
      <ErrorBoundary>
        <Header />
        <Outlet />
      </ErrorBoundary>
    </AppContextProvider>
  );
};

export default App;
