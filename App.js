import { Provider } from 'react-redux';
import React from 'react';
import store from './src/store';
import App from './src';

export default () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}