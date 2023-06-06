import { RouterProvider } from 'react-router-dom';
import { render } from '@testing-library/react';
import { getRoutes } from '..';

describe('getRoutes tests', () => {
    it('Should match all expected routes', () => {
        const { getByText } = render(<RouterProvider router={getRoutes()} />);
        expect(getByText('navigation.title')).toBeInTheDocument();
    });
});
