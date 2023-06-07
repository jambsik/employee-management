import { createAsyncThunk } from '@reduxjs/toolkit';

import { EmployeeStateEvents } from '../type';
import { fetchCreateEmployee } from '../../../services/employeeeService';
import { EmployeeFormType } from '../../../pages/Employees/employeeForm';

export const createEmployeeAction = createAsyncThunk(
    EmployeeStateEvents.AddData,
    async (employee: EmployeeFormType) => await fetchCreateEmployee(employee),
);
