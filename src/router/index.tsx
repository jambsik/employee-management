import { createBrowserRouter } from 'react-router-dom';

import { Root } from '../pages/Root';
import { ErrorPage } from '../pages/Error';

export const getRoutes = () =>
    createBrowserRouter([
        { path: '*', Component: Root, errorElement: <ErrorPage /> },
    ]);
