import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Button, StatusBar} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AddScreen from './AddScreen';
import EditScreen from './EditScreen';
import DeleteScreen from './DeleteScreen';
import ViewScreen from './ViewScreen';
import {TextInput} from 'react-native-gesture-handler';

const TabNavigator = createBottomTabNavigator(
  {
    Add: {
      screen: AddScreen,
      navigationOptions: {
        title: 'Add',
      },
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: {
        title: 'Edit',
      },
    },
    Delete: {
      screen: DeleteScreen,
      navigationOptions: {
        title: 'Delete',
      },
    },
    View: {
      screen: ViewScreen,
      navigationOptions: {
        title: 'View',
      },
    },
  },
  {
    defaultNavigationOptions: ({}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {},
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: 20,
        margin: 0,
        padding: 0,
      },
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  },
);

class DashboardScreen extends React.Component {
  render () {
    const FilteredProductsNav = createAppContainer(TabNavigator);
    return <FilteredProductsNav />;
  }
}

export default DashboardScreen;
