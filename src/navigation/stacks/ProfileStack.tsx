import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '@/screens/ProfileScreen';
import {ProfileStackParamList} from '@/navigation/NavigationTypes';

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
