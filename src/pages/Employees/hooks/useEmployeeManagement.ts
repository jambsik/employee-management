import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectEmployeeItemsState } from '../../../store/employee';
import { Route } from '../../../constants/Route';
import { Employee } from '../../../Models/Employee';
import { deleteEmployeeAction } from '../../../store/employee/actions/deleteEmployeeAction';
import { getEmployeeDataAction } from '../../../store/employee/actions/getEmployeeDataAction';
import { filterEmployees } from '../employeesHelper';

export interface UseEmployeeManagementExports {
    tableItems: Employee[];
    filter: string;
    onSubmitFilter: (value: string) => void;
    handleDelete: (item: Employee) => void;
    handleEdit: (item: Employee) => void;
    handleFilterChange: (value: string) => void;
}

export const useEmployeeManagement = (): UseEmployeeManagementExports => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const items: Employee[] = useAppSelector(selectEmployeeItemsState);
    const [tableItems, setTableItems] = useState(items);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        dispatch(getEmployeeDataAction()).catch(console.error);
    }, [dispatch]);

    useEffect(() => setTableItems(items), [items]);

    const onSubmitFilter = (value: string) =>
        setTableItems(filterEmployees(value, items));

    const handleDelete = (item: Employee) => {
        dispatch(deleteEmployeeAction(item.id)).catch(console.error);
        setFilter('');
    };

    const handleEdit = (item: Employee) => {
        navigate(`/${Route.Employee}/${item.id}`, { state: item });
    };

    const handleFilterChange = (value: string) => {
        setFilter(value);
    };

    return {
        tableItems,
        filter,
        onSubmitFilter,
        handleFilterChange,
        handleDelete,
        handleEdit,
    };
};
