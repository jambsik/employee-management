const namespace = 'jm';

export const getStorageItem = (key: string) => {
    let item;

    try {
        item = localStorage.getItem(`${namespace}/${key}`);
        item = JSON.parse(item ?? '');
    } catch (error) {
        console.error(error);
        item = undefined;
    }

    return item;
};

export const setStorageItem = (key: string, value: string) =>
    localStorage.setItem(`${namespace}/${key}`, value);
