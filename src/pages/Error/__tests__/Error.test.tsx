import { render, screen } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ErrorPage } from '../index';

describe('ErrorPage tests', () => {
    it('Should render error message', () => {
        render(<ErrorPage />, { wrapper: MemoryRouter });

        const errorMessage = screen.getByText('page.error.message');
        expect(errorMessage).toBeInTheDocument();
    });

    it('Should render go back button', () => {
        render(<ErrorPage />, { wrapper: MemoryRouter });

        const goBackButton = screen.getByText('global.go_back');
        expect(goBackButton).toBeInTheDocument();
    });

    it('Should navigate to home page when go back button is clicked', () => {
        const { container } = render(<ErrorPage />, { wrapper: MemoryRouter });

        const goBackButton = screen.getByText('global.go_back');
        expect(goBackButton).toBeInTheDocument();

        const link = container.querySelector('a');
        expect(link).toHaveAttribute('href', '/');
    });
});
