import React from 'react';
import { Layout } from './components/Layout';
import { getRoutes } from './router';
import { RouterProvider } from 'react-router';

const App = () => (
    <Layout>
        <RouterProvider router={getRoutes()} />
    </Layout>
);

export default App;
