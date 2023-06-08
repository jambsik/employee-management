import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export interface GoBackProps {
    path: string;
}

export const GoBack = ({ path }: GoBackProps) => {
    const { t } = useTranslation();
    return (
        <Link className="flex flex-row items-center" to={`/${path}`}>
            <i className="material-icons cursor-pointer text-base">
                arrow_back
            </i>
            <span className="text-primary font-bold underline  hover:text-secondary-600">
                {t('global.go_back')}
            </span>
        </Link>
    );
};
