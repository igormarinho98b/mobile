import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import Cadastrar from '../screens/Cadastrar';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#E5E5E5'},
    }}>
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen
      name="Cadastrar"
      component={Cadastrar}
      options={{
        headerShown: true,
        headerStyle: {backgroundColor: '#5636D3'},
        headerTintColor: '#fff',
        cardStyle: {backgroundColor: '#E5E5E5'},
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
