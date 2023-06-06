import React from 'react';
import { getRoutes } from './router';
import { RouterProvider } from 'react-router';

const App = () => <RouterProvider router={getRoutes()} />;

export default App;
