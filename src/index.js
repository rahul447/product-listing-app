import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);