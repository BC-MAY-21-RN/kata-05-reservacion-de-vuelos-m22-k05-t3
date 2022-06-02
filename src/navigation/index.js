import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import UserContext from '../context/UserContext.js';

import RegisterScreen from '../screens/RegisterScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import FlightsScreen from '../screens/FlightsScreen.js';
//import { renderNode } from 'react-native-elements/dist/helpers';

const Stack = createNativeStackNavigator();

const StackLoged = [
    {name: 'Flights', component: FlightsScreen, title: 'Flights'}
];

const StackNoLoged = [
    {name: 'Register', component: RegisterScreen, title: 'Register'},
    {name: 'Login', component: LoginScreen, title: 'Login'}
];

const typeStack = user => {
    if (user === null) {
        return StackNoLoged;
    } else {
        return StackLoged;
    }
};

export default function Navigation() {
    const {user, setUser} = React.useContext(UserContext);
    function onAuthStateChanged(userInfo) {
        setUser(userInfo);
    }
    
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    });

    return (
       <NavigationContainer>
        <Stack.Navigator>
          {typeStack(user).map((item, index) => (
            <Stack.Screen
                key={index}
                name={item.name}
                component={item.component}
            />
          ))}
        </Stack.Navigator>
       </NavigationContainer> 
    );
};
