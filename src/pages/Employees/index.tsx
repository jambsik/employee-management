import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Table } from '../../components/Table';
import { Employee } from '../../Models/Employee';
import { getEmployeeDataAction } from '../../store/employee/actions/getEmployeeData';
import { selectEmployeeItemsState } from '../../store/employee';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { SearchBar } from '../../components/SearchBar';
import { filterEmployees, getTableColumns } from './employeesHelper';

export const Employees = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const items: Employee[] = useAppSelector(selectEmployeeItemsState);
    const [tableItems, setTableItems] = useState(items);
    const tableActionProps = {
        label: t('global.actions'),
        items: [
            {
                id: 'edit',
                icon: 'create',
            },
        ],
    };

    useEffect(() => {
        dispatch(getEmployeeDataAction()).catch(console.error);
    }, [dispatch]);

    useEffect(() => setTableItems(items), [items]);

    const onChangeFilter = (value: string) =>
        setTableItems(filterEmployees(value, items));

    return (
        <div className="w-full h-full">
            <div className="mb-16 text-xl font-bold text-primary">
                {t('page.employee.title')}
            </div>
            <div className="w-full">
                <div className="mb-4">
                    <SearchBar onChangeFilter={onChangeFilter} />
                </div>
                <Table<Employee>
                    columns={getTableColumns(t)}
                    items={tableItems}
                    actions={tableActionProps}
                />
            </div>
        </div>
    );
};
