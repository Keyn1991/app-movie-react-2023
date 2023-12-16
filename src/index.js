import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

import './index.css';
import {App} from './App';
import {setupStore} from "./redux";

let store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>

);


