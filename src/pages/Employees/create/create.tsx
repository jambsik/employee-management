import { useNavigate } from 'react-router-dom';

import { createEmployeeAction } from '../../../store/employee/actions/createEmployeAction';
import { useAppDispatch } from '../../../store/hooks';
import {
    EmployeeForm,
    EmployeeFormType,
} from '../../../components/organisms/EmployeeForm/employeeForm';
import { Route } from '../../../constants/Route';
import { useTranslation } from 'react-i18next';
import { GoBack } from '../../../components/molecules/GoBack';

export const CreateEmployee = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSave = async (values: EmployeeFormType) => {
        if (values?.email) {
            dispatch(createEmployeeAction(values)).catch(console.error);
            navigate(`/${Route.Employee}`);
        }
    };

    return (
        <div className="">
            <GoBack path={Route.Employee} />
            <div className="mt-8">
                <EmployeeForm
                    label={`${t('page.employee.create')}`}
                    onSave={handleSave}
                />
            </div>
        </div>
    );
};
