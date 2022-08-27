/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {CustomView} from '../styles';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CustomView>
          <Text>Projeto de conclusão</Text>
        </CustomView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
