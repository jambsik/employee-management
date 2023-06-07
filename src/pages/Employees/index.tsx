import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Table } from '../../components/Table';
import { Employee } from '../../Models/Employee';
import { getEmployeeDataAction } from '../../store/employee/actions/getEmployeeDataAction';
import { selectEmployeeItemsState } from '../../store/employee';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { SearchBar } from '../../components/SearchBar';
import { filterEmployees, getTableColumns } from './employeesHelper';
import { Button } from '../../components/Button';
import { NeestedRoute } from '../../constants/Route';
import { deleteEmployeeAction } from '../../store/employee/actions/deleteEmployeeAction';

export const Employees = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const items: Employee[] = useAppSelector(selectEmployeeItemsState);
    const [tableItems, setTableItems] = useState(items);

    const handleDelete = (item: Employee) => {
        dispatch(deleteEmployeeAction(item.id)).catch(console.error);
    };

    const tableActionProps = {
        label: t('global.actions'),
        items: [
            {
                id: 'delete',
                icon: 'delete',
                onClick: handleDelete,
            },
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
            <div className="mb-2">
                <Link to={`${NeestedRoute.CreateEmployee}`}>
                    <Button>{t('global.create')}</Button>
                </Link>
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
