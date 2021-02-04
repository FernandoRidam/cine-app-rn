import React from 'react';

import {
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import {
  useTranslation,
} from 'react-i18next';

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

  const { t } = useTranslation();

  return (
    <NavigationContainer theme={ MyTheme }>
      <Tab.Navigator
        initialRouteName="Films"
        tabBarOptions={{
          activeTintColor: '#FFC527',
          inactiveTintColor: '#FFF',
          labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
          },

          style: {
            height: 65,
            paddingVertical: 5,
            backgroundColor: '#020916',
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: t('tab.films'),
            tabBarIcon: ({ color, size }) => <Icon name="play" size={ size } color={ color } />
          }}
          name="Films"
          component={ Films }
        />

        <Tab.Screen
          options={{
            tabBarLabel: t('tab.series'),
            tabBarIcon: ({ color, size }) => <Icon name="list" size={ size } color={ color } />
          }}
          name="Series"
          component={ Series }
        />

        <Tab.Screen
          options={{
            tabBarLabel: t('tab.settings'),
            tabBarIcon: ({ color, size }) => <Icon name="settings" size={ size } color={ color } />
          }}
          name="Settings"
          component={ Settings }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
