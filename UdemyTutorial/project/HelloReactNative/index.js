/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import Hello from './HelloReact';
import Component from './src/basics/Components';

//styles
import Style1 from './src/styles/style1';
import Style2 from './src/styles/style2';
import Style3 from './src/styles/style3'; 
import Style4 from './src/styles/style4'; 
// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Hello);
// basic components
AppRegistry.registerComponent(appName, () => Style3);
