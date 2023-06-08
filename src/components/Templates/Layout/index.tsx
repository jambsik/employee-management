import { ReactElement } from 'react';
import { Navigation } from '../../organisms/Navigation';
import { getLabeledRoutes } from '../../../constants/Route';

export interface LayoutProps {
    children: ReactElement;
}

export const Layout = ({ children }: LayoutProps) => (
    <div className="overflow-x-hidden flex flex-row h-screen bg-neutral">
        <Navigation items={getLabeledRoutes()} />
        <div className="p-10 w-full h-full">{children}</div>
    </div>
);
