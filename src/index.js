import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import {HashRouter} from "react-router-dom";

import Router from "./components/Router";

ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Router/>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);