import { Route, Routes } from 'react-router-dom';

import { Employees } from '../Employees';
import { Route as AppRoute, NeestedRoute } from '../../constants/Route';
import { Home } from '../Home';
import { Layout } from '../../components/Layout';
import { CreateEmployee } from '../Employees/create';

export const Root = () => (
    <Layout>
        <Routes>
            <Route path={AppRoute.Home} element={<Home />} />
            <Route path={AppRoute.Employee} element={<Employees />} />
            <Route
                path={NeestedRoute.CreateEmployee}
                element={<CreateEmployee />}
            />
        </Routes>
    </Layout>
);
