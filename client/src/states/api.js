export const server = "http://localhost:8000";

import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducer/index';
import counterReducer from './counter/counter'

export const store = configureStore({

    reducer: {
       counter:counterReducer
        // post: postReducer,
    },
});
