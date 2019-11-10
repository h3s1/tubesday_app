import React from 'react'
import {Dimensions} from "react-native"
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import ListScreen from "../screens/ListScreen"

const { width, height } = Dimensions.get("window");


const HomeStack = createStackNavigator({
    List: {
        screen: ListScreen,
        navigationOptions: ({navigation}) => ({header:null})
    }
})

const Drawer = createDrawerNavigator(
    {Home: HomeStack}, {
        initialRouteName: "Home",
    drawerType: "front",
    drawerWidth: Math.floor(width / 3) * 2,
    }
)

const AppContainer = createAppContainer(createSwitchNavigator(
    {Drawer}, {initialRouteName: "Drawer"}
))

export default AppContainer