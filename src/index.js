import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <App />
                </div>
            </div>
        </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
