import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '@/navigation/stacks/HomeStack';
import ProfileStack from '@/navigation/stacks/ProfileStack';
import {BottomTabParamList} from '@/navigation/NavigationTypes';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
