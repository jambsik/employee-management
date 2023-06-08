import { ApiResponse } from '../Models/ApiResponse';
import { Employee } from '../Models/Employee';
import { Route } from '../constants/Route';

import axios from 'axios';
import { useMockAxios, useMockErrorAxios } from './mockService';
import { EmployeeFormType } from '../components/organisms/EmployeeForm/employeeForm';

export const API_URL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(useMockAxios, useMockErrorAxios);

export const fetchAllEmployees = async (): Promise<ApiResponse<Employee>> => {
    const response: ApiResponse<Employee> = {
        items: [],
    };

    try {
        response.items = (
            await axios.get(`${API_URL}/${Route.Employee}`)
        )?.data;
    } catch (error) {
        console.log(error);
        // Simulation example
        response.error = {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Error getting employees..',
        };
    }

    return response;
};

export const fetchCreateEmployee = async (
    employee: EmployeeFormType,
): Promise<ApiResponse<Employee>> => {
    const response: ApiResponse<Employee> = {
        items: [],
    };

    try {
        response.item = (
            await axios.post(`${API_URL}/${Route.Employee}`, employee)
        )?.data;
    } catch (error) {
        console.log(error);
        // Simulation example
        response.error = {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Error getting employees..',
        };
    }

    return response;
};

export const fetchDeleteEmployee = async (
    id: string,
): Promise<ApiResponse<Employee>> => {
    const response: ApiResponse<Employee> = {
        items: [],
    };

    try {
        response.items = (
            await axios.delete(`${API_URL}/${Route.Employee}/${id}`)
        )?.data;
    } catch (error) {
        console.log(error);
        // Simulation example
        response.error = {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Error getting employees..',
        };
    }

    return response;
};

export const fetchUpdateEmployee = async (
    employee: Employee,
): Promise<ApiResponse<Employee>> => {
    const response: ApiResponse<Employee> = {
        items: [],
    };

    try {
        response.items = (
            await axios.put(
                `${API_URL}/${Route.Employee}/${employee.id}`,
                employee,
            )
        )?.data;
    } catch (error) {
        console.log(error);
        // Simulation example
        response.error = {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Error getting employees..',
        };
    }

    return response;
};
