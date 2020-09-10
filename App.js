import { Provider } from 'react-redux';
import React from 'react';
import store from './src/store';
import AppView from './src/AppView';

export default () => {
  return (
    <Provider store={store}>
      <AppView/>
    </Provider>
  );
}