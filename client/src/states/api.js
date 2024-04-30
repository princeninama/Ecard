export const server = "http://localhost:8000";

import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducer/index';

export const store = configureStore({

    reducer: {
        user: userReducer,
        // post: postReducer,
    },
});
