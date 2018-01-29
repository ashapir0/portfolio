import React from "react";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default class RootWrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <h1>Wrapper Works!</h1>
      </Provider>
    );
  }

}