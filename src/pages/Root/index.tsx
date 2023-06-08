import { Route, Routes } from 'react-router-dom';

import { Employees } from '../Employees';
import { Route as AppRoute, NeestedRoute } from '../../constants/Route';
import { Home } from '../Home';
import { Layout } from '../../components/Templates/Layout';
import { CreateEmployee } from '../Employees/create/create';
import { EditEmployee } from '../Employees/edit/edit';

export const Root = () => (
    <Layout>
        <Routes>
            <Route path={AppRoute.Home} element={<Home />} />
            <Route path={AppRoute.Employee} element={<Employees />} />
            <Route
                path={NeestedRoute.CreateEmployee}
                element={<CreateEmployee />}
            />
            <Route
                path={NeestedRoute.EditEmployee}
                element={<EditEmployee />}
            />
        </Routes>
    </Layout>
);
