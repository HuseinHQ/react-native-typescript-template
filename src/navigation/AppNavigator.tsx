import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './tabs/BottomTabNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
