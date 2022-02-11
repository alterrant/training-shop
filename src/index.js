import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import {HashRouter} from "react-router-dom";
import Router from "./components/Router";
import {store} from "./redux/store";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Router/>
        </HashRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);