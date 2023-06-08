import { createAsyncThunk } from '@reduxjs/toolkit';

import { EmployeeStateEvents } from '../type';
import { fetchDeleteEmployee } from '../../../services/employeeService';

export const deleteEmployeeAction = createAsyncThunk(
    EmployeeStateEvents.Delete,
    async (id: string) => await fetchDeleteEmployee(id),
);
