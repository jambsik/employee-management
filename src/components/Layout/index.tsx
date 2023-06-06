import { ReactElement } from 'react';
import { Navigation } from '../Navigation';
import { getLabeledRoutes } from '../../constants/Route';

export interface LayoutProps {
    children: ReactElement;
}

export const Layout = ({ children }: LayoutProps) => (
    <div className="overflow-x-hidden h-screen bg-primary">
        <Navigation items={getLabeledRoutes()} />
        {children}
    </div>
);
