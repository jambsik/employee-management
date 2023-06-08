import {
    getStorageItem,
    setStorageItem,
    storageNameSpace,
} from './../storageHelper';

describe('Storage Utility Functions', () => {
    describe('getStorageItem', () => {
        it('Should retrieve item from local storage', () => {
            const key = 'testKey';
            const value = 'testValue';

            setStorageItem(key, value);
            expect(window.localStorage.setItem).toHaveBeenCalledWith(
                `${storageNameSpace}/${key}`,
                value,
            );

            const result = getStorageItem(key);

            expect(window.localStorage.getItem).toHaveBeenCalledWith(
                `${storageNameSpace}/${key}`,
            );
        });

        it('Should return undefined for non-existing item', () => {
            const key = 'nonExistingKey';

            const result = getStorageItem(key);

            expect(window.localStorage.getItem).toHaveBeenCalledWith(
                `${storageNameSpace}/${key}`,
            );
            expect(result).toBeUndefined();
        });
    });

    describe('setStorageItem', () => {
        it('Should set item in local storage', () => {
            const key = 'testKey';
            const value = 'testValue';

            setStorageItem(key, value);

            expect(window.localStorage.setItem).toHaveBeenCalledWith(
                `${storageNameSpace}/${key}`,
                value,
            );
        });
    });
});
