import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainMenu from '../Components/MainMenu'
import NewSession from '../Components/NewSession'

const AppNavigator = createStackNavigator({
  MainMenu: MainMenu,
  NewSession: NewSession,
},
{
  // initialRouteName: 'MainMenu'
})

export default createAppContainer(AppNavigator);
