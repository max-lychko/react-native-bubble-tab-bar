import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { theme } from '../themes';

import { HomeScreen, ProfileScreen, SearchScreen, SettingsScreen } from '../scenes';
import TabBar from '../components/TabBar';
import TabIcon from '../components/TabBar/TabIcon';

const tabBar = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: props => <TabIcon iconName="home" {...props} />,
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: props => <TabIcon iconName="magnifier" {...props} />,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: props => <TabIcon iconName="user" {...props} />,
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: props => <TabIcon iconName="settings" {...props} />,
    },
  },
};

const tabBarConfig = {
  tabBarComponent: props => (
    <TabBar
      tabColors={[
        theme.tabColors.home,
        theme.tabColors.search,
        theme.tabColors.profile,
        theme.tabColors.settings,
      ]}
      {...props}
    />
  ),
  initialRouteName: 'Home',
  tabBarOptions: {
    inactiveTintColor: theme.colors.inactiveColor,
  },
};

export default createAppContainer(createBottomTabNavigator(tabBar, tabBarConfig));
