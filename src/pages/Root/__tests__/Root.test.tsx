import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route as ReactRoute } from 'react-router-dom';

import { Root } from '../index';
import { ReactElement } from 'react';
import { NeestedRoute, Route } from '../../../constants/Route';

export const MockedRouteComponent = () => <div>Mocked Route</div>;

const getRenderRoute = (path: string, element: ReactElement) => {
    const route = path.startsWith('/') ? path : `/${path}`;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <ReactRoute path="*" element={<Root />} />
                <ReactRoute path={route} element={element} />,
            </Routes>
        </MemoryRouter>,
    );
};

const mockedTitle = 'Mocked Route';

describe('Root Page tests', () => {
    it('Should render the Home component on the Home route', () => {
        const { getByText } = getRenderRoute(
            Route.Home,
            <MockedRouteComponent />,
        );

        const mockedCOmponent = getByText(mockedTitle);
        expect(mockedCOmponent).toBeInTheDocument();
    });

    it('Should render the Employees component on the Employees route', () => {
        const { getByText } = getRenderRoute(
            Route.Employee,
            <MockedRouteComponent />,
        );
        const mockedCOmponent = getByText(mockedTitle);
        expect(mockedCOmponent).toBeInTheDocument();
    });

    it('Should render the CreateEmployee component on the CreateEmployee route', () => {
        const { getByText } = getRenderRoute(
            NeestedRoute.CreateEmployee,
            <MockedRouteComponent />,
        );
        const mockedCOmponent = getByText(mockedTitle);
        expect(mockedCOmponent).toBeInTheDocument();
    });

    it('Should render the EditEmployee component on the EditEmployee route', () => {
        const { getByText } = getRenderRoute(
            NeestedRoute.EditEmployee,
            <MockedRouteComponent />,
        );
        const mockedCOmponent = getByText(mockedTitle);
        expect(mockedCOmponent).toBeInTheDocument();
    });
});
