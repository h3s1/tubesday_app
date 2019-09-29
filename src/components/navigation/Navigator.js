import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#26274f',
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitle: '홈',
      headerForceInset: { top: 'never' },
    }),
  },
});

export default createAppContainer(AppNavigator);
