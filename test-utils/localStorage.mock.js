const localStorageMock = () => {
    let store = {};
    return {
        getItem: jest.fn((key) => store[key] || null),
        setItem: jest.fn((key, value) => {
            store[key] = value;
        }),
        clear: jest.fn(() => {
            store = {};
        }),
        getStore: jest.fn(() => store),
    };
};

Object.defineProperty(window, 'localStorage', {
    writable: true,
    value: localStorageMock(),
});
