import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Table } from '../../components/organisms/Table';
import { Employee } from '../../Models/Employee';
import { SearchBar } from '../../components/molecules/SearchBar';
import { getTableColumns } from './employeesHelper';
import { Button } from '../../components/atoms/Button';
import { NeestedRoute } from '../../constants/Route';
import { useEmployeeManagement } from './hooks/useEmployeeManagement';

export const Employees = () => {
    const { t } = useTranslation();
    const {
        filter,
        handleFilterChange,
        tableItems,
        handleDelete,
        handleEdit,
        onSubmitFilter,
    } = useEmployeeManagement();

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
                onClick: handleEdit,
            },
        ],
    };

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
                    <SearchBar
                        value={filter}
                        onSubmitFilter={onSubmitFilter}
                        handleChange={handleFilterChange}
                    />
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
