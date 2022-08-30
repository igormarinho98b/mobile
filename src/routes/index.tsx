import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../hooks/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="#999" size="large" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
