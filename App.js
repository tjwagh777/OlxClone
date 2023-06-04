import {View, Text} from 'react-native';
import React from 'react';
import Appnavigator from './src/Appnavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Appnavigator />
    </Provider>
  );
};

export default App;
