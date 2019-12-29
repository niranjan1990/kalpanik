/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './SplashScreen';
import DashboardScreen from './DashboardScreen';
import AddScreen from './AddScreen';
import EditScreen from './EditScreen';
import DeleteScreen from './DeleteScreen';
import ViewScreen from './ViewScreen';
import UpdateScreen from './UpdateScreen';

const MainNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  Dashboard: {screen: DashboardScreen},
  Add: {screen: AddScreen},
  Edit: {screen: EditScreen},
  Delete: {screen: DeleteScreen},
  View: {screen: ViewScreen},
  Update: {screen: UpdateScreen},
});

console.disableYellowBox = true;
const App = createAppContainer(MainNavigator);

export default App;
