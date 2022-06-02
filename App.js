/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import { UserContextProvider } from './src/context/UserContext';
import Navigation from './src/navigation';

const App = () => {
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
}

export default App;
