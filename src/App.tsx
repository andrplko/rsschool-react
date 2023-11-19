import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import './App.module.scss';

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Outlet />
    </ErrorBoundary>
  );
};

export default App;
