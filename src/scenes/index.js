import React from 'react';

import DefaultScreen from './DefaultScreen';

export const HomeScreen = props => <DefaultScreen {...props} name="Home" />;
export const SearchScreen = props => <DefaultScreen {...props} name="Search" />;
export const ProfileScreen = props => <DefaultScreen {...props} name="Profile" />;
export const SettingsScreen = props => <DefaultScreen {...props} name="Settings" />;
