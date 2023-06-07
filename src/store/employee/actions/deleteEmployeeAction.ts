import { createAsyncThunk } from '@reduxjs/toolkit';

import { EmployeeStateEvents } from '../type';
import { fetchDeleteEmployee } from '../../../services/employeeeService';

export const deleteEmployeeAction = createAsyncThunk(
    EmployeeStateEvents.Delete,
    async (id: string) => await fetchDeleteEmployee(id),
);
