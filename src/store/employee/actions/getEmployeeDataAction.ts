import { createAsyncThunk } from '@reduxjs/toolkit';

import { EmployeeStateEvents } from '../type';
import { fetchAllEmployees } from '../../../services/employeeService';

export const getEmployeeDataAction = createAsyncThunk(
    EmployeeStateEvents.GetData,
    async () => await fetchAllEmployees(),
);
