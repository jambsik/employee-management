import { i18n } from 'i18next';

import { Employee } from '../../Models/Employee';
import { TableColumn } from '../../components/Table';

export const getTableColumns = (t: i18n['t']): TableColumn[] => [
    {
        id: 'id',
        label: `${t('model.employee.id')}`,
    },
    {
        id: 'firstName',
        label: `${t('model.employee.firstName')}`,
    },
    {
        id: 'lastName',
        label: `${t('model.employee.lastName')}`,
    },
    {
        id: 'email',
        label: `${t('model.employee.email')}`,
    },
    {
        id: 'jobTitle',
        label: `${t('model.employee.jobTitle')}`,
    },
];

export const filterEmployees = (text: string, items: Employee[]) => {
    const criteria = text.toLowerCase();
    return items.filter(
        (employee: Employee) =>
            employee.firstName.toLowerCase().includes(criteria) ||
            employee.lastName.toLowerCase().includes(criteria),
    );
};
