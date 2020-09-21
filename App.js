import React from 'react';
import {Stack} from './src/Navigation';
import {Login} from './src/screens/Login';
import {Register} from './src/screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
