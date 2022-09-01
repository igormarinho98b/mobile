import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {
  ActivityIndicator,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextInputProps,
  ViewStyle,
} from 'react-native';

import {useTheme} from 'styled-components/native';

import {mask as maskHelper} from 'src/utils/mask';

import Icon from '../Icon';
import iconhelper from '../Icon/iconhelper';
import {
  LabelContainer,
  Label,
  LabelHelper,
  Container,
  Content,
  LeftIcon,
  TextInput,
  RightIcon,
  ErrorMessage,
  ValidIcon,
} from './styles';

interface OwnProps extends TextInputProps {
  label?: string;
  labelHelper?: 'optional' | 'required';
  mask?: 'phone' | 'cnpj' | 'cpf' | 'zipcode';
  style?: Omit<StyleProp<ViewStyle>, 'backgroundColor'>;
  error?: string;
  isPassword?: boolean;
  isValid?: boolean;
  icon?: {
    left?: {
      name: string;
      size?: number;
      color?: string;
      disabled?: boolean;
      loading?: boolean;
      action?: () => void;
    };
    right?: {
      name: string;
      size?: number;
      color?: string;
      disabled?: boolean;
      loading?: boolean;
      action?: () => void;
    };
  };
}

export interface InputRef {
  focus: () => void;
}

function Input(
  {
    label,
    labelHelper,
    mask,
    icon,
    style = {},
    error,
    value,
    onChangeText,
    onFocus,
    onBlur,
    isPassword = false,
    isValid = false,
    ...rest
  }: OwnProps,
  ref: React.ForwardedRef<InputRef>,
) {
  const theme = useTheme();

  const inputRef = useRef<any>(null);

  const [internalValue, setInternalValue] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  function handleChangeText(text: string) {
    if (onChangeText) {
      onChangeText(maskHelper[mask || 'noMask'](text));
    }
    if (!onChangeText) {
      setInternalValue(maskHelper[mask || 'noMask'](text));
    }
  }

  function handleFocus(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    setIsFocused(true);

    if (onFocus) {
      onFocus(e);
    }
  }

  function handleBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    setIsFocused(false);

    if (onBlur) {
      onBlur(e);
    }
  }

  function handleTogglePasswordVisible() {
    setPasswordVisible((oldPasswordVisible) => !oldPasswordVisible);
  }

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <Container style={style}>
      {label ? (
        <LabelContainer>
          <Label>{label}</Label>

          {labelHelper ? (
            <LabelHelper>
              {labelHelper === 'optional' ? '(Opcional)' : '(Obrigatório)'}
            </LabelHelper>
          ) : null}
        </LabelContainer>
      ) : null}

      <Content isErrored={!!error} isFocused={isFocused}>
        {icon?.left ? (
          <LeftIcon
            disabled={
              !!icon.left.action || icon.left?.disabled || icon.right?.loading
            }
            onPress={icon.left.action}>
            {icon.left?.loading ? (
              <ActivityIndicator color={theme.colors.refreshControl.primary} />
            ) : (
              <Icon
                color={icon.left.color}
                name={icon.left.name}
                size={icon.left.size}
              />
            )}
          </LeftIcon>
        ) : null}

        <TextInput
          ref={inputRef}
          autoCorrect={false}
          spellCheck={false}
          {...rest}
          placeholderTextColor={theme.colors.input.placeholder}
          secureTextEntry={isPassword && !passwordVisible}
          underlineColorAndroid="transparent"
          value={value || internalValue}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
        />

        {isPassword ? (
          <RightIcon onPress={handleTogglePasswordVisible}>
            <Icon name={iconhelper[passwordVisible ? 'eyeSlash' : 'eye']} />
          </RightIcon>
        ) : null}

        {!isPassword && icon?.right ? (
          <RightIcon
            disabled={
              !icon.right?.action || icon.right?.disabled || icon.right?.loading
            }
            onPress={icon.right?.action}>
            {icon.right?.loading ? (
              <ActivityIndicator color={theme.colors.refreshControl.primary} />
            ) : (
              <Icon
                color={icon.right.color}
                name={icon.right.name}
                size={icon.right.size}
              />
            )}
          </RightIcon>
        ) : null}

        {isValid ? (
          <ValidIcon>
            <Icon color={theme.colors.input.valid} name={iconhelper.check} />
          </ValidIcon>
        ) : null}
      </Content>

      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </Container>
  );
}

export default forwardRef(Input);
