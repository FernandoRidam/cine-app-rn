import React from 'react';

import {
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

import {
  Main,
} from './pages';

export default function Routes() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#020916',
    },
  };

  return (
    <NavigationContainer theme={ MyTheme }>
      <Tab.Navigator
        initialRouteName="Main"
        tabBarOptions={{
          activeTintColor: '#FFC527',
          inactiveTintColor: '#DDD',
          labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
          },

          style: {
            backgroundColor: '#020916',
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: 'Filmes',
            tabBarIcon: ({ color, size }) => <Icon name="play" size={ size } color={ color } />
          }}
          name="Main"
          component={ Main }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
