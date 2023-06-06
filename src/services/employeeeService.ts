import { ApiResponse } from '../Models/ApiResponse';
import { Employee } from '../Models/Employee';
import { Route } from '../constants/Route';

import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;

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
