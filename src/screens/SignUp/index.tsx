import React, {useState} from 'react';

import Input from 'src/components/Input';
import Button from 'src/components/Button';

import {
  Container,
  UpperContainer,
  BottomContainer,
  Title,
  SubTitle,
  InputsWrapper,
  InputView,
  ButtonView,
} from './styles';

const SignUp: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <UpperContainer>
        <Title>MyFinances</Title>
        <SubTitle>
          Faça seu cadastro e tenha a praticidade que você precisa
        </SubTitle>
      </UpperContainer>

      <BottomContainer>
        <InputsWrapper>
          <InputView>
            <Input
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Nome"
            />
          </InputView>
          <InputView>
            <Input
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="E-mail"
              autoComplete="email"
              keyboardType="email-address"
            />
          </InputView>

          <InputView>
            <Input
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Senha"
              autoComplete="password"
              isPassword
            />
          </InputView>
        </InputsWrapper>

        <ButtonView>
          <Button>Cadastrar</Button>
          <Button
            onPress={() => {
              navigation.goBack();
            }}>
            Voltar
          </Button>
        </ButtonView>
      </BottomContainer>
    </Container>
  );
};

export default SignUp;
