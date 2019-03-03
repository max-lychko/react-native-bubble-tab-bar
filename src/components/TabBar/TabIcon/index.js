import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@expo/vector-icons/SimpleLineIcons';

const TabIcon = ({ tintColor, iconName }) => <Icon name={iconName} size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default TabIcon;
