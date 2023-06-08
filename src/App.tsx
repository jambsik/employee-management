import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';

import { getRoutes } from './router';
import { store } from './store';

const App = () => (
    <Provider store={store}>
        <RouterProvider router={getRoutes()} />
    </Provider>
);

export default App;
