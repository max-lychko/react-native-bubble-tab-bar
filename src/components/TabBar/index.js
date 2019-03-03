import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

import { Wrapper } from './styled';

const TabBar = ({ renderIcon, tabColors, inactiveTintColor, navigation, onTabPress }) => (
  <Wrapper>
    {navigation.state.routes.map((route, index) => (
      <Tab
        key={route.key}
        renderIcon={renderIcon}
        route={route}
        isActive={index === navigation.state.index}
        activeColors={tabColors[index]}
        inactiveColor={inactiveTintColor}
        onTabPress={onTabPress}
      />
    ))}
  </Wrapper>
);

TabBar.propTypes = {
  renderIcon: PropTypes.func.isRequired,
  tabColors: PropTypes.array.isRequired,
  inactiveTintColor: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  onTabPress: PropTypes.func.isRequired,
};

export default TabBar;
