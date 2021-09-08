import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Products from './pages/Products';
import Details from './pages/Details'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={Products}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
