const useMock = [(k) => k, {}];
useMock.t = (k) => k;
useMock.i18n = {};

module.exports = {
    Translation: ({ children }) => children((k) => k, { i18n: {} }),
    useTranslation: () => useMock,
};
