import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Spinkit from 'react-native-spinkit';

import {useTheme} from 'styled-components/native';

import {Container, Text} from './styles';

interface OwnProps extends TouchableOpacityProps {
  children: string;
  loading?: boolean;
  onPress?: (data?: any) => void;
}

function Button({
  children,
  disabled = false,
  loading = false,
  ...rest
}: OwnProps) {
  const theme = useTheme();

  return (
    <Container {...rest} disabled={disabled || loading}>
      {loading ? (
        <Spinkit
          color={theme.colors.button.indicator}
          size={30}
          type="Bounce"
        />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

export default Button;
