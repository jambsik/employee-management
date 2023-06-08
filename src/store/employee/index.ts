import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Employee } from '../../Models/Employee';
import { getEmployeeDataAction } from './actions/getEmployeeDataAction';
import { ApiResponse } from '../../Models/ApiResponse';
import { ReducerName } from '../reducerName';
import { RootState } from '../index';
import { createEmployeeAction } from './actions/createEmployeAction';
import { deleteEmployeeAction } from './actions/deleteEmployeeAction';
import { updateEmployeeAction } from './actions/editEmployeeAction';

export interface EmployeeSliceState {
    items: Employee[];
}
export const initialState: EmployeeSliceState = {
    items: [],
};

const handleEmployees = (
    state: EmployeeSliceState,
    action: PayloadAction<ApiResponse<Employee>>,
) => {
    state.items = action.payload.items as Employee[];
};

export const employeeSlice = createSlice({
    name: ReducerName.Employee,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEmployeeDataAction.fulfilled, handleEmployees);
        builder.addCase(deleteEmployeeAction.fulfilled, handleEmployees);
        builder.addCase(updateEmployeeAction.fulfilled, handleEmployees);
        builder.addCase(
            createEmployeeAction.fulfilled,
            (
                state: EmployeeSliceState,
                action: PayloadAction<ApiResponse<Employee>>,
            ) => {
                state.items = [action.payload.item as Employee, ...state.items];
            },
        );
    },
});

export const actions = employeeSlice.actions;

export const selectEmployeeItemsState = (state: RootState) =>
    state[ReducerName.Employee].items;

export const employeeReducer = employeeSlice.reducer;
