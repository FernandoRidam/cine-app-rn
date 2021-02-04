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
  Films,
  Series,
  Settings,
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
        initialRouteName="Films"
        tabBarOptions={{
          activeTintColor: '#FFC527',
          inactiveTintColor: '#999',
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
          name="Films"
          component={ Films }
        />

        <Tab.Screen
          options={{
            tabBarLabel: 'Séries',
            tabBarIcon: ({ color, size }) => <Icon name="list" size={ size } color={ color } />
          }}
          name="Series"
          component={ Series }
        />

        <Tab.Screen
          options={{
            tabBarLabel: 'Configurações',
            tabBarIcon: ({ color, size }) => <Icon name="settings" size={ size } color={ color } />
          }}
          name="Settings"
          component={ Settings }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
