import { useEffect, useState } from 'react';
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next';

import { fetchAllEmployees } from '../../services/employeeeService';
import { Table, TableColumn } from '../../components/Table';
import { Employee } from '../../Models/Employee';
import { ApiResponse } from '../../Models/ApiResponse';

const getTableColumns = (t: i18n['t']): TableColumn[] => [
    {
        id: 'id',
        label: t('model.employee.id'),
    },
    {
        id: 'firstName',
        label: t('model.employee.firstName'),
    },
    {
        id: 'lastName',
        label: t('model.employee.lastName'),
    },
    {
        id: 'email',
        label: t('model.employee.email'),
    },
    {
        id: 'jobTitle',
        label: t('model.employee.jobTitle'),
    },
];

export const Employees = () => {
    const { t } = useTranslation();
    const [data, setData] = useState<ApiResponse<Employee>>({ items: [] });

    useEffect(() => {
        const fetchData = async () => {
            const d = await fetchAllEmployees();
            console.log(d);
            setData(d);
        };
        fetchData().catch(console.error);
    }, []);

    return (
        <div className="w-full h-full">
            <div className="mb-16 text-xl font-bold text-primary">
                {t('page.employee.title')}
            </div>
            <Table<Employee> columns={getTableColumns(t)} items={data.items} />
        </div>
    );
};
