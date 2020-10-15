import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"
import RootReducer from "./modules/index"
import { Provider } from "react-redux"

const store = createStore(RootReducer)
const listener = () => {
  const state = store.getState();
  console.log(state);
};
const unsubscribe = store.subscribe(listener);
console.log(store.getState()
)
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
);
