import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Employees } from '../../pages/Employees';
import { ErrorPage } from '../../pages/Error';
import { Route } from '../../constants/Route';

describe('getRoutes tests', () => {
    it('Should match all expected routes', () => {
        const routes = createBrowserRouter([
            {
                path: Route.Employee,
                element: <Employees />,
                errorElement: <ErrorPage />,
            },
        ]);
        const { getByText } = render(<RouterProvider router={routes} />);
        expect(getByText('Employee component')).toBeInTheDocument();
    });
});
