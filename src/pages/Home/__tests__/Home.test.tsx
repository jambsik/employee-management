import { render, screen } from '@testing-library/react';
import { Home } from '../';

describe('Home page tests', () => {
    it('Should render welcome message', () => {
        render(<Home />);

        const welcomeMessage = screen.getByText('page.home.welcome_message');
        expect(welcomeMessage).toBeInTheDocument();
    });
});
