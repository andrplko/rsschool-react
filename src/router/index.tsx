import App from '../App';
import Details from '../components/Details';
import { Routes } from './routes';
import NotFoundPage from '../pages/NotFoundPage';
import MainPage from '../pages/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const routesConfig = [
  {
    path: Routes.index,
    element: <App />,
    children: [
      {
        path: Routes.index,
        element: <MainPage />,
        children: [
          {
            path: Routes.release,
            children: [{ path: Routes.id, element: <Details /> }],
          },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

const router = createBrowserRouter(routesConfig);

export default router;
