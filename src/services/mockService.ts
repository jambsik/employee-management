import { AxiosError, AxiosResponse } from 'axios';

import { employeeListMock } from './../__fixtures__/employee/employeeList';

import { getStorageItem, setStorageItem } from '../helpers/storageHelper';
import { Route } from '../constants/Route';
import { Employee } from '../Models/Employee';

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

export const useMockErrorAxios = (error: AxiosError) => {
    if (error?.config?.url?.includes(`${API_URL}/${Route.Employee}`)) {
        const mock = getStorageItem('employees');
        const requestData = error?.config?.data;

        if (error?.config?.method === 'post') {
            const response = requestData
                ? {
                      data: {
                          id: `${Math.floor(
                              Math.random() * (1e15 - 1e10 + 1) + 1e10,
                          )}`,
                          ...JSON.parse(requestData),
                      },
                  }
                : { data: {} };
            if (response.data?.id) {
                setStorageItem(
                    'employees',
                    JSON.stringify([response.data, ...mock]),
                );
            }
            return response;
        } else if (error?.config?.method === 'delete') {
            const parts = error?.config?.url.split('/');
            const id = parts[parts.length - 1];
            const data = mock?.filter((d: Employee) => d.id !== id);
            setStorageItem('employees', JSON.stringify(data));
            return { data };
        }
    }
    return { data: {} };
};
