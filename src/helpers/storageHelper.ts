export const storageNameSpace = 'jm';

export const getStorageItem = (key: string) => {
    let item;
    let storedValue;

    try {
        storedValue = localStorage.getItem(`${storageNameSpace}/${key}`);
        item = JSON.parse(storedValue ?? '');
    } catch (error) {
        if ((error as Error).message.includes('Unexpected end of JSON input')) {
            item = storedValue;
        }
    }

    return item;
};

export const setStorageItem = (key: string, value: string) =>
    localStorage.setItem(`${storageNameSpace}/${key}`, value);
