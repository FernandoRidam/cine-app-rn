import React from 'react';

import {
  TouchableOpacity,
} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

import {
  useTranslation,
} from 'react-i18next';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import {
  Films,
  Series,
  Settings,
  Details,
} from './pages';

function TabNavigation() {
  const { t } = useTranslation();

  return (
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
  );
};

export default function Routes() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#020916',
    },
  };

  const headerOpstions = {
    headerTintColor: '#FFF',
    headerBackTitleVisible: false,
    headerTitleStyle: {
      fontSize: 19,
      marginLeft: 10,
    },
    headerStyle: {
      backgroundColor: '#020916',
      height: 55,
    },
  };

  function BackImageArrowLeft( props ) {
    return (
      <TouchableOpacity
        { ...props }
        style={{
          padding: 20,
          borderRadius: 20,
        }}
        activeOpacity={ 0.6 }
      >
        <Icon name="arrow-left" size={ 27 } color="white" />
      </TouchableOpacity>
    );
  };

  const { t } = useTranslation();

  return (
    <NavigationContainer theme={ MyTheme }>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="TabNavigation"
          component={ TabNavigation }
        />

        <Stack.Screen
          options={{
            title: t('stack.details.title'),
            headerLeft: BackImageArrowLeft,
            ...headerOpstions,
          }}
          name="Details"
          component={ Details }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
