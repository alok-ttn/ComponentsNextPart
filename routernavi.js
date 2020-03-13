import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import First from './src/naviback/firstScreen';
import Second from './src/naviback/secondScreen';
import Third from './src/naviback/thirdScreen';

import * as React from 'react';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Second" component={Second} />
      <Stack.Screen name="Third" component={Third} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
