import React from 'react';
import ReactDOM from 'react-dom/client';
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App';
import {setupStore} from "./reduxs";
import {history} from "./services";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore()

root.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>
);
