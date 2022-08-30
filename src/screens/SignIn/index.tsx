import React from 'react';
import {Text} from 'react-native';

import Input from 'src/components/Input';

import {
  Container,
  UpperContainer,
  BottomContainer,
  Title,
  SubTitle,
  LoginText,
  InputsWrapper,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <UpperContainer>
        <Title>MyFinances</Title>
        <SubTitle>
          Tenha VOCÊ o controle do seu dinheiro...e da sua vida!
        </SubTitle>
        <LoginText>
          Faça seu LOGIN usando suas credenciais logo abaixo
        </LoginText>
      </UpperContainer>

      <BottomContainer>
        <InputsWrapper>
          <Input />
          <Input />
        </InputsWrapper>
      </BottomContainer>
    </Container>
  );
};

export default SignIn;
