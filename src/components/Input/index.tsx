import React from 'react';

import {Container, TextInput} from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <TextInput keyboardAppearance="dark" placeholderTextColor="#666360" />
    </Container>
  );
};

export default Input;
