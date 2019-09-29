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
import { DataProvider } from './contexts';
import Navigator from './components/navigation/Navigator';

const App = () => (
  <DataProvider>
    <SafeAreaView>
      <Navigator />
    </SafeAreaView>
  </DataProvider>
);

export default App;
