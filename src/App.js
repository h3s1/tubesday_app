/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigator from './components/navigation/Navigator';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Navigator />
  </SafeAreaView>
);

export default App;
