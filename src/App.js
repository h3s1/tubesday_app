/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Navigator from './components/navigation/Navigator';

const App = () => (
  <Provider store={createStore(reducers)}>
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  </Provider>
);

export default App;
