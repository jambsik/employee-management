import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { HomePage } from '../../pages/Home';
import { ErrorPage } from '../../pages/Error';
import { Route } from '../../constants/Route';

describe('getRoutes tests', () => {
    it('Should match all expected routes', () => {
        const routes = createBrowserRouter([
            {
                path: Route.Home,
                element: <HomePage />,
                errorElement: <ErrorPage />,
            },
        ]);
        const { getByText } = render(<RouterProvider router={routes} />);
        expect(getByText('Home component')).toBeInTheDocument();
    });
});
