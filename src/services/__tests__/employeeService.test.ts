import axios from 'axios';
import {
    fetchAllEmployees,
    fetchCreateEmployee,
    fetchDeleteEmployee,
    fetchUpdateEmployee,
} from '../employeeService';
import { Route } from '../../constants/Route';
import {
    employeeListMock,
    employeeToDeleteMock,
    newEmployeeMock,
} from '../../__fixtures__/employee/employeeList';

import { useConsoleMock } from '../../../test-utils/console.mock';

jest.mock('axios');

const API_URL = 'http://localhost:3000/api';

describe('Employee Service Tests cases', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('fetchAllEmployees', () => {
        it('Should get all employees list', async () => {
            axios.get.mockResolvedValueOnce({
                data: employeeListMock,
            });

            const result = await fetchAllEmployees();

            expect(result.items).toEqual(employeeListMock);
            expect(axios.get).toHaveBeenCalledWith(
                `${API_URL}/${Route.Employee}`,
            );
        });

        it('Should handle error when fetching all employees', async () => {
            const errorMessage = 'Error getting employees..';
            axios.get.mockRejectedValueOnce(new Error(errorMessage));
            const consoleMock = useConsoleMock('error');

            const result = await fetchAllEmployees();

            expect(result.error).toEqual({
                code: 'INTERNAL_SERVER_ERROR',
                message: errorMessage,
            });
            expect(axios.get).toHaveBeenCalledWith(
                `${API_URL}/${Route.Employee}`,
            );
            expect(console.error).toHaveBeenCalledWith(new Error(errorMessage));

            consoleMock.mockRestore();
        });
    });

    describe('fetchCreateEmployee', () => {
        it('Should create an employee', async () => {
            const mockResponse = {
                data: { id: 1, ...newEmployeeMock },
            };
            axios.post.mockResolvedValueOnce(mockResponse);

            const result = await fetchCreateEmployee(newEmployeeMock);

            expect(result.item).toEqual(mockResponse.data);
            expect(axios.post).toHaveBeenCalledWith(
                `${API_URL}/${Route.Employee}`,
                newEmployeeMock,
            );
        });

        it('Should handle error when creating an employee', async () => {
            const errorMessage = 'Error creating employee..';
            axios.post.mockRejectedValueOnce(new Error(errorMessage));
            const consoleMock = useConsoleMock('error');

            const result = await fetchCreateEmployee(newEmployeeMock);

            expect(result.error).toEqual({
                code: 'INTERNAL_SERVER_ERROR',
                message: errorMessage,
            });
            expect(axios.post).toHaveBeenCalledWith(
                `${API_URL}/${Route.Employee}`,
                newEmployeeMock,
            );
            expect(console.error).toHaveBeenCalledWith(new Error(errorMessage));
            consoleMock.mockRestore();
        });
    });

    describe('fetchDeleteEmployee', () => {
        it('Should delete an employee successfully', async () => {
            const mockResponse = {
                data: employeeListMock,
            };
            axios.delete.mockResolvedValueOnce(mockResponse);

            const result = await fetchDeleteEmployee(employeeToDeleteMock.id);

            expect(result.items).toEqual(mockResponse.data);
            expect(axios.delete).toHaveBeenCalledWith(
                `${API_URL}/${Route.Employee}/1`,
            );
        });

        it('Should handle error when deleting an employee', async () => {
            const errorMessage = 'Error deleting employee..';
            axios.delete.mockRejectedValueOnce(new Error(errorMessage));
            const consoleMock = useConsoleMock('error');

            const result = await fetchDeleteEmployee('1');

            expect(result.error).toEqual({
                code: 'INTERNAL_SERVER_ERROR',
                message: errorMessage,
            });
            expect(axios.delete).toHaveBeenCalledWith(
                `${API_URL}/${Route.Employee}/${employeeToDeleteMock.id}`,
            );
            expect(console.error).toHaveBeenCalledWith(new Error(errorMessage));
            consoleMock.mockRestore();
        });
    });

    describe('fetchUpdateEmployee', () => {
        it('Should update an employee successfully', async () => {
            const employeeData = employeeListMock[0];
            const mockResponse = {
                data: employeeListMock,
            };
            axios.put.mockResolvedValueOnce(mockResponse);

            const result = await fetchUpdateEmployee(employeeData);

            expect(result.items).toEqual(mockResponse.data);
            expect(axios.put).toHaveBeenCalledWith(
                `${API_URL}/${Route.Employee}/${employeeData.id}`,
                employeeData,
            );
        });

        it('Should handle error when updating an employee', async () => {
            const errorMessage = 'Error updating employee..';
            const employeeData = employeeListMock[0];

            axios.put.mockRejectedValueOnce(new Error(errorMessage));
            const consoleMock = useConsoleMock('error');

            const result = await fetchUpdateEmployee(employeeData);

            expect(result.error).toEqual({
                code: 'INTERNAL_SERVER_ERROR',
                message: errorMessage,
            });
            expect(axios.put).toHaveBeenCalledWith(
                `${API_URL}/${Route.Employee}/${employeeData.id}`,
                employeeData,
            );
            expect(console.error).toHaveBeenCalledWith(new Error(errorMessage));
            consoleMock.mockRestore();
        });
    });
});
