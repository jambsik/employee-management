import { Route, Routes } from 'react-router-dom';

import { Employees } from '../Employees';
import { Route as AppRoute } from '../../constants/Route';
import { Home } from '../Home';
import { Layout } from '../../components/Layout';

export const Root = () => (
    <Layout>
        <Routes>
            <Route path={AppRoute.Home} element={<Home />} />
            <Route path={AppRoute.Employee} element={<Employees />} />
        </Routes>
    </Layout>
);
