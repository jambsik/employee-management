import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n.use(initReactI18next)
    .use(Backend)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        lng: 'en',
        fallbackLng: 'en',

        interpolation: {
            escapeValue: true,
        },
        react: {
            useSuspense: false,
        },
    })
    .catch(console.error);

export const i18nResolve = (key: string) => i18n.t(key);

export default i18n;
