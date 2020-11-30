import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './App/reducers';

import AppContainer from './App/Rootnav';

export default function App() {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk) )}>

    <AppContainer />
    </Provider>

  )
}
