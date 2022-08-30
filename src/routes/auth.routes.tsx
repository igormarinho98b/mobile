import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Auth = createStackNavigator();

function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#E5E5E5'},
      }}>
      <Auth.Screen component={SignIn} name="SignIn" />
      <Auth.Screen component={SignUp} name="SignUp" />
    </Auth.Navigator>
  );
}

export default AuthRoutes;
