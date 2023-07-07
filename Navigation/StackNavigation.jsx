import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfilScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Accueil'}}
        />
         <Stack.Screen
          name="Profil"
          component={ProfileScreen}
          options={{title: 'Profil'}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default MyStack;