import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  console.disableYellowBOx = true;

  return (
    <NavigationContainer>
      <StatusBar style='black'></StatusBar>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  )
}