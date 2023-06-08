import { useLocation, useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import {
    EmployeeForm,
    EmployeeFormType,
} from '../../../components/organisms/EmployeeForm/employeeForm';
import { Route } from '../../../constants/Route';
import { useAppDispatch } from '../../../store/hooks';
import { updateEmployeeAction } from '../../../store/employee/actions/editEmployeeAction';
import { GoBack } from '../../../components/molecules/GoBack';

export const EditEmployee = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { state } = useLocation();

    const handleSave = async (values: EmployeeFormType) => {
        if (values?.email) {
            dispatch(
                updateEmployeeAction({
                    ...state,
                    ...values,
                }),
            ).catch(console.error);
            navigate(`/${Route.Employee}`);
        }
    };

    return (
        <div className="">
            <GoBack path={Route.Employee} />
            <div className="mt-8">
                <EmployeeForm
                    defaultValues={state ?? {}}
                    label={`${t('page.employee.edit')}`}
                    onSave={handleSave}
                />
            </div>
        </div>
    );
};
