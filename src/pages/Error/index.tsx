import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl text-red-500 font-bold mb-4">Oops!</h1>
                <p className="text-gray-700 text-lg mb-6">
                    {t('page.error.message')}
                </p>
                <Link to="/">
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        {t('global.go_back')}
                    </button>
                </Link>
            </div>
        </div>
    );
};
