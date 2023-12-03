import App from '../App';
import MainPage from '../pages/MainPage';
import ReactHookFormPage from '../pages/ReactHookFormPage';
import UncontrolledFormPage from '../pages/UncontrolledFormPage';
import { Routes } from './routes';
import { createBrowserRouter } from 'react-router-dom';

export const routesConfig = [
  {
    path: Routes.Main,
    element: <App />,
    children: [
      {
        path: Routes.Main,
        element: <MainPage />,
      },
      {
        path: Routes.UncontrolledForm,
        element: <UncontrolledFormPage />,
      },
      {
        path: Routes.ReactHookForm,
        element: <ReactHookFormPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig);

export default router;
