import { FormEvent, useState, ChangeEvent } from 'react';

import { useTranslation } from 'react-i18next';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import {
    Employee,
    EmployeeAttributes,
    getEmployeeAttributes,
} from '../../../Models/Employee';
import { emailRegex } from '../../../helpers/regexHelper';

export type EmployeeFormType = Omit<Employee, EmployeeAttributes.Id>;

export interface EmployeeFormProps {
    label: string;
    defaultValues?: EmployeeFormType;
    onSave?: (values: EmployeeFormType) => void;
}

export const EmployeeForm = ({
    label,
    defaultValues,
    onSave,
}: EmployeeFormProps) => {
    const { t } = useTranslation();
    const fields = getEmployeeAttributes()?.filter(
        (a) =>
            EmployeeAttributes[a as keyof typeof EmployeeAttributes] !==
            EmployeeAttributes.Id,
    );
    const [values, setValues] = useState(
        defaultValues ?? {
            [EmployeeAttributes.FirstName]: '',
            [EmployeeAttributes.LastName]: '',
            [EmployeeAttributes.Email]: '',
            [EmployeeAttributes.JobTitle]: '',
        },
    );

    const handleChange = (id: string, event: ChangeEvent<HTMLInputElement>) =>
        setValues({
            ...values,
            [id]: event.target.value,
        });

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (typeof onSave === 'function') {
            onSave(values);
        }
    };

    return (
        <div>
            <span className="text-2xl text-primary mb-8">{label}</span>
            <form
                className="mt-6 bg-gold h-full opacity-80 rounded-lg shadow-md p-6 text-2xl"
                onSubmit={handleOnSubmit}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fields?.map((field) => {
                        const fieldId =
                            EmployeeAttributes[
                                field as keyof typeof EmployeeAttributes
                            ];
                        const isEmail = fieldId === EmployeeAttributes.Email;
                        return (
                            <div key={field}>
                                <span className="text-lg text-primary">
                                    {t(`model.employee.${fieldId}`)}*
                                </span>
                                <div className="w-64">
                                    <Input
                                        required={true}
                                        type={isEmail ? 'email' : 'text'}
                                        pattern={
                                            isEmail ? emailRegex : undefined
                                        }
                                        value={
                                            values[
                                                fieldId as keyof EmployeeFormType
                                            ]
                                        }
                                        onChange={(
                                            event: ChangeEvent<HTMLInputElement>,
                                        ) => handleChange(fieldId, event)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full h-12 mt-2 flex flex-row justify-end">
                    <Button type="submit">{t('global.save')}</Button>
                </div>
            </form>
        </div>
    );
};
