/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './Screen/HomeScreen';
import MyStack  from './Navigation/StackNavigation';
import Drawer from './Navigation/Drawer';   
//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => MyStack);
//AppRegistry.registerComponent(appName, () => Drawer);