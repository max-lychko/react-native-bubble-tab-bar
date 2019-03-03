import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import { screenWidth } from '../../../utils/dimensions';

import { TabTouchable, TabWrapper, Label } from './styled';

class Tab extends PureComponent {
  static propTypes = {
    route: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
    onTabPress: PropTypes.func.isRequired,
    renderIcon: PropTypes.func.isRequired,
    activeColors: PropTypes.object.isRequired,
    inactiveColor: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.tabWidth = screenWidth / 4;

    const tabWidth = props.isActive ? this.tabWidth : 50;
    const labelOpacity = props.isActive ? 1 : 0;
    const labelWidth = props.isActive ? 50 : 0;

    this.state = {
      tabWidth: new Animated.Value(tabWidth),
      labelOpacity: new Animated.Value(labelOpacity),
      labelWidth: new Animated.Value(labelWidth),
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isActive !== this.props.isActive && prevProps.isActive) {
      this.animatedHide();
    } else {
      this.animatedOpen();
    }
  }

  animatedOpen = () => {
    const { tabWidth, labelWidth, labelOpacity } = this.state;

    Animated.parallel([
      Animated.timing(tabWidth, {
        toValue: this.tabWidth,
        duration: 300,
      }).start(),
      Animated.timing(labelWidth, {
        toValue: 50,
        duration: 300,
      }).start(),
      Animated.timing(labelOpacity, {
        toValue: 1,
        duration: 150,
        delay: 150,
      }).start(),
    ]);
  };

  animatedHide = () => {
    const { tabWidth, labelWidth, labelOpacity } = this.state;

    Animated.parallel([
      Animated.timing(tabWidth, {
        toValue: 50,
        duration: 300,
      }).start(),
      Animated.timing(labelWidth, {
        toValue: 0,
        duration: 300,
      }).start(),
      Animated.timing(labelOpacity, {
        toValue: 0,
        duration: 100,
      }).start(),
    ]);
  };

  render() {
    const { route, isActive, onTabPress, renderIcon, activeColors, inactiveColor } = this.props;
    const { tabWidth, labelWidth, labelOpacity } = this.state;

    const color = isActive ? activeColors.active : inactiveColor;

    return (
      <TabTouchable
        onPress={() => {
          onTabPress({ route });
        }}
      >
        <TabWrapper
          style={{ width: tabWidth }}
          isActive={isActive}
          activeBgColor={activeColors.background}
        >
          {renderIcon({
            route,
            focused: isActive,
            tintColor: color,
          })}
          <Label
            numberOfLines={1}
            isActive={isActive}
            color={color}
            style={{ opacity: labelOpacity, width: labelWidth }}
          >
            {route.routeName}
          </Label>
        </TabWrapper>
      </TabTouchable>
    );
  }
}

export default Tab;
