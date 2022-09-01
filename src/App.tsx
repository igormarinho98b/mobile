import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import theme from './theme';
import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <View style={{backgroundColor: '#312e38', flex: 1}}>
          <Routes />
        </View>
      </AppProvider>
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
