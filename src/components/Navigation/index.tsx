import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

export interface NavigationProps {
    items: Array<{
        route: string;
        label: string;
    }>;
}

export const Navigation = ({ items }: NavigationProps) => {
    const { t } = useTranslation();
    return (
        <nav
            id="navigation-component"
            className="bg-primary h-full text-white text-bold w-40"
        >
            <div className="pt-4 flex flex-col items-center">
                <img className="w-20" src={logo} alt="Logo" />
                <span className="pt-4 text-gold font-bold">
                    {t('component.navigation.title')}
                </span>
            </div>

            <ul className="pt-10 flex flex-col w-full text-base">
                {items.map((item) => (
                    <li
                        key={item.label}
                        className="pl-8 pt-2 hover:underline pr-5"
                    >
                        <Link to={`${item.route}`}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
