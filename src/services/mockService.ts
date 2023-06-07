import { AxiosResponse } from 'axios';

import { employeeListMock } from './../__fixtures__/employee/employeeList';

import { getStorageItem, setStorageItem } from '../helpers/storageHelper';
import { Route } from '../constants/Route';

export const API_URL = process.env.REACT_APP_API_URL;

export const useMockAxios = (response: AxiosResponse) => {
    if (response.config.url === `${API_URL}/${Route.Employee}`) {
        const mock = getStorageItem('employees');
        if (!mock) {
            setStorageItem('employees', JSON.stringify(employeeListMock));
        }
        return {
            ...response,
            data: mock || employeeListMock,
        };
    }

    return response;
};
