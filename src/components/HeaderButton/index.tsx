import React, {useMemo} from 'react';
import {ActivityIndicator} from 'react-native';

import {transparentize} from 'polished';
import {useTheme} from 'styled-components/native';

import Icon from '../Icon';
import {Container} from './styles';

interface OwnProps {
  icon: {
    name: string;
  };
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  alignedTo?: 'right' | 'left';
}

function HeaderButton({
  icon,
  onPress,
  loading = false,
  disabled = false,
  alignedTo = 'right',
}: OwnProps) {
  const theme = useTheme();

  const isDisabled = useMemo(() => {
    return loading || disabled;
  }, [disabled, loading]);

  return (
    <Container alignedTo={alignedTo} disabled={isDisabled} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={theme.colors.refreshControl.primary} />
      ) : (
        <Icon
          {...icon}
          color={
            isDisabled
              ? transparentize(0.6, theme.colors.icon.primary)
              : theme.colors.icon.primary
          }
        />
      )}
    </Container>
  );
}

export default HeaderButton;
