import React from 'react'
import {Dimensions} from "react-native"
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import ListScreen from "../screens/ListScreen"
import CreatePostScreen from "../screens/CreatePostScreen"

const { width, height } = Dimensions.get("window");
const HEADER_EXPANDED_HEIGHT = Math.min(60, Math.round(height / 10));

const HomeStack = createStackNavigator({
    List: {
        screen: ListScreen,
        navigationOptions: ({navigation}) => ({header:null})
    },
    Create: {
        screen: CreatePostScreen,
        navigationOptions: ({ navigation }) => ({
            title: "영상 추천하기",
            headerStyle: {
              backgroundColor: "red",
              borderBottomWidth: 0,
              height: HEADER_EXPANDED_HEIGHT
            },
            headerTintColor: "#fff",
            headerTitle: "영상 추가하기",
            headerForceInset: { top: "never" }
          })
    }
})



const Drawer = createDrawerNavigator(
    {
        Home: {screen: HomeStack, navigationOptions: {drawerLabel: "메인화면"}},
        Create: {screen: CreatePostScreen, navigationOptions: {drawerLabel: "영상 추천하기"}}
    }, 
    {
        initialRouteName: "Home",
    drawerType: "front",
    drawerWidth: Math.floor(width / 3) * 2,
    }
)

const AppContainer = createAppContainer(createSwitchNavigator(
    {Drawer}, {initialRouteName: "Drawer"}
))

export default AppContainer