import { createAsyncThunk } from '@reduxjs/toolkit';

import { EmployeeStateEvents } from '../type';
import { fetchCreateEmployee } from '../../../services/employeeService';
import { EmployeeFormType } from '../../../components/organisms/EmployeeForm/employeeForm';

export const createEmployeeAction = createAsyncThunk(
    EmployeeStateEvents.AddData,
    async (employee: EmployeeFormType) => await fetchCreateEmployee(employee),
);
