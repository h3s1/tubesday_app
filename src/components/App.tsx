/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import List from './List';
import Navigator from '../navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

const store = createStore(reducer);

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#25365d',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
