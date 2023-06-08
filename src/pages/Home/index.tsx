import { Translation } from 'react-i18next';

export const Home = () => (
    <div className="text-6xl text-primary flex flex-col items-center justify-center h-full">
        <Translation>
            {(t) => <p>{t('page.home.welcome_message')}</p>}
        </Translation>
    </div>
);
