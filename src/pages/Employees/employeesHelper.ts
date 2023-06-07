import { i18n } from 'i18next';

import { Employee, EmployeeAttributes } from '../../Models/Employee';
import { TableColumn } from '../../components/Table';

export const getTableColumns = (t: i18n['t']): TableColumn[] => [
    {
        id: EmployeeAttributes.Id,
        label: `${t('model.employee.id')}`,
    },
    {
        id: EmployeeAttributes.FirstName,
        label: `${t('model.employee.firstName')}`,
    },
    {
        id: EmployeeAttributes.LastName,
        label: `${t('model.employee.lastName')}`,
    },
    {
        id: EmployeeAttributes.Email,
        label: `${t('model.employee.email')}`,
    },
    {
        id: EmployeeAttributes.JobTitle,
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
