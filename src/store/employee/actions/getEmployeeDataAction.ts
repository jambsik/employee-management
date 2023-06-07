import { createAsyncThunk } from '@reduxjs/toolkit';

import { EmployeeStateEvents } from '../type';
import { fetchAllEmployees } from '../../../services/employeeeService';

export const getEmployeeDataAction = createAsyncThunk(
    EmployeeStateEvents.GetData,
    async () => await fetchAllEmployees(),
);
