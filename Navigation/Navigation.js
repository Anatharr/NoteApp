import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainMenuScreen from '../Screens/MainMenuScreen'
import NewSessionScreen from '../Screens/NewSessionScreen'

const AppNavigator = createStackNavigator({
  MainMenu: MainMenuScreen,
  NewSession: NewSessionScreen,
},
{
  initialRouteName: 'MainMenu'
})

export default createAppContainer(AppNavigator);
