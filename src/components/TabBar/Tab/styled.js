import { Animated } from 'react-native';
import styled from 'styled-components';

const TabTouchable = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabWrapper = styled(Animated.View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: 10;
  padding-vertical: 5;
  border-radius: 20;
  background-color: ${({ isActive, activeBgColor }) => (isActive ? activeBgColor : 'transparent')};
`;

const Label = styled(Animated.Text)`
  margin-left: 5;
  font-size: 12;
  color: ${({ color }) => color};
`;

export { TabTouchable, TabWrapper, Label };
