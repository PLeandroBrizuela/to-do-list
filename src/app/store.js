import { configureStore } from '@reduxjs/toolkit';
import taskSlice from '../features/tasklist/taskSlice';

export const store = configureStore({
    reducer: {
        tasks: taskSlice,
    },
})