import React, {useState} from 'react';

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
import {useAuth} from 'src/hooks/auth';

const SignIn: React.FC = ({navigation}: any) => {
  const {signIn} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSignIn() {
    if (email && password) {
      setIsLoading(true);
      signIn({email, password})
        .then((data) => {
          console.log(data, 'DATA');
        })
        .catch((err) => console.log(err, 'ERROR MANO'))
        .finally(() => setIsLoading(false));
    }
  }

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
          <Button loading={isLoading} onPress={() => handleSignIn()}>
            Entrar
          </Button>
          <Button
            onPress={() => {
              console.log('Navigation');
              navigation.navigate('SignUp');
            }}>
            Cadastrar
          </Button>
        </ButtonView>
      </BottomContainer>
    </Container>
  );
};

export default SignIn;
