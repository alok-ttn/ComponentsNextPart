import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/components/ComponentAlert';
import Confirmation from './src/components/TextInputExample';
import Recharge from './src/components/home';
import FlatModal from './src/components/flatlistModal';
import screenNext from './src/components/screenNext'

import * as React from 'react';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Recharge" component={Recharge} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="FlatModal" component={FlatModal} />
      <Stack.Screen name="screenNext" component={screenNext} />


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
