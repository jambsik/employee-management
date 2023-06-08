import { configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from './employee';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { ReducerName } from './reducerName';

export const store = configureStore({
    reducer: {
        [ReducerName.Employee]: employeeReducer,
    },
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
