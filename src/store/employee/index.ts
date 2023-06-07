import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Employee } from '../../Models/Employee';
import { getEmployeeDataAction } from './actions/getEmployeeData';
import { ApiResponse } from '../../Models/ApiResponse';
import { ReducerName } from '../reducerName';
import { RootState } from '../index';

export interface EmployeeSliceState {
    items: Employee[];
}
export const initialState: EmployeeSliceState = {
    items: [],
};

export const employeeSlice = createSlice({
    name: ReducerName.Employee,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getEmployeeDataAction.fulfilled,
            (
                state: EmployeeSliceState,
                action: PayloadAction<ApiResponse<Employee>>,
            ) => {
                state.items = action.payload.items as Employee[];
            },
        );
    },
});

export const actions = employeeSlice.actions;

export const selectEmployeeItemsState = (state: RootState) =>
    state[ReducerName.Employee].items;

export const employeeReducer = employeeSlice.reducer;
