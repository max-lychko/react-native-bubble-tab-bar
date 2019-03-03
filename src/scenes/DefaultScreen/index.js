import React from 'react';
import PropTypes from 'prop-types';

import { theme } from '../../themes';

import { Container, Gradient, Title } from './styled';

const DefaultScreen = ({ name }) => (
  <Container>
    <Gradient
      colors={[theme.linearGradient.header.from, theme.linearGradient.header.to]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0.2, 1]}
    />
    <Title>This is the {name} Screen</Title>
  </Container>
);

DefaultScreen.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DefaultScreen;
