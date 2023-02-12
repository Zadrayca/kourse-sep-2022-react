import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {postReducer, userReducer, carReducer, carReducer2} from "./slices";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    cars: carReducer,
    cars2: carReducer2
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};