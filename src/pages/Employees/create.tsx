import { Link, useNavigate } from 'react-router-dom';
import { createEmployeeAction } from '../../store/employee/actions/createEmployeAction';
import { useAppDispatch } from '../../store/hooks';
import { EmployeeForm, EmployeeFormType } from './employeeForm';
import { Route } from '../../constants/Route';
import { useTranslation } from 'react-i18next';

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
            <Link
                className="flex flex-row items-center"
                to={`/${Route.Employee}`}
            >
                <i className="material-icons cursor-pointer text-base">
                    arrow_back
                </i>
                <a className="text-primary font-bold underline  hover:text-secondary-600">
                    {t('global.go_back')}
                </a>
            </Link>
            <div className="mt-8">
                <EmployeeForm
                    label={`${t('page.employee.create')}`}
                    onSave={handleSave}
                />
            </div>
        </div>
    );
};
