const { createStore, applyMiddleware } = require('redux');

const thunk = require('redux-thunk').default;

reducer = (state) => state

const store = createStore(reducer, applyMiddleware(thunk));


exports.default = store;