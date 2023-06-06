import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '../pages/Home';
import { ErrorPage } from '../pages/Error';
import { Route } from '../constants/Route';

export const getRoutes = () =>
    createBrowserRouter([
        {
            path: Route.Home,
            element: <HomePage />,
            errorElement: <ErrorPage />,
        },
    ]);
