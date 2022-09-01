import React from 'react';

import Input from 'src/components/Input';
import Button from 'src/components/Button';

import {
  Container,
  UpperContainer,
  BottomContainer,
  Title,
  SubTitle,
  LoginText,
  InputsWrapper,
  InputView,
  ButtonView,
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
          <InputView>
            <Input placeholder="E-mail" />
          </InputView>

          <InputView>
            <Input placeholder="Senha" />
          </InputView>
        </InputsWrapper>

        <ButtonView>
          <Button>Entrar</Button>
          <Button>Cadastrar</Button>
        </ButtonView>
      </BottomContainer>
    </Container>
  );
};

export default SignIn;
