/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import Hello from './HelloReact';
import Component from './src/basics/Components';
import StyleExample from './src/basics/StyleExample';
import FlexBoxExample1 from './src/flexbox/FlexBosExample1'


//styles
import Style1 from './src/styles/style1';
import Style2 from './src/styles/style2';
import Style3 from './src/styles/style3'; 
import Style4 from './src/styles/style4'; 

// For States
import StateAndUserInput from './src/stateAndUserInput/StateAndUserInput'

// list
import ListComponent from './src/list/ListComponent';
// list functional component
import ListFunctionalComponent from './src/list/ListFunctionalComponent';
// style list items
import ListItemStyle from './src/styleListItems/ListItemStyle';
// Scroll items
import ScrollListItem from './src/scroll/ScrollListItem'
// flatlist example
import FlatListEXample from './src/flatList/FlatListExample';

import RootComponent from './src/goalAppUsingComponents/RootComponent';

// debug
import RootComponentHeader from './src/debug/RootComponent';


// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Hello);
// basic components
AppRegistry.registerComponent(appName, () => RootComponentHeader);
