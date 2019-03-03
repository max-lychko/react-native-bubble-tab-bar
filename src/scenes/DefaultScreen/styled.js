import styled from 'styled-components';

import { LinearGradient } from 'expo';

import { screenHeight, screenWidth } from '../../utils/dimensions';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 150;
  align-items: center;
`;

const Gradient = styled(LinearGradient)`
  position: absolute;
  top: ${screenHeight / -2};
  left: ${(screenWidth * 1.8 - screenWidth) / -2};
  width: ${screenWidth * 1.8};
  height: ${screenHeight};
  border-radius: ${screenHeight / 2};
`;

const Title = styled.Text`
  max-width: 220;
  font-size: 32;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export { Container, Gradient, Title };
