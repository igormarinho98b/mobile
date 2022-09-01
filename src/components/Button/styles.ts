import {TouchableOpacityProps} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<TouchableOpacityProps>`
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  background: ${({theme, disabled}) =>
    theme.colors.button[!disabled ? 'enabled' : 'disabled']};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.text.secondary};
`;
