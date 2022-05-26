import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../reducers/user';

const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

export default store;