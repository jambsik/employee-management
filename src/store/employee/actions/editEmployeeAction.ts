import { createAsyncThunk } from '@reduxjs/toolkit';

import { EmployeeStateEvents } from '../type';
import { fetchUpdateEmployee } from '../../../services/employeeeService';
import { Employee } from '../../../Models/Employee';

export const updateEmployeeAction = createAsyncThunk(
    EmployeeStateEvents.Update,
    async (employee: Employee) => await fetchUpdateEmployee(employee),
);
