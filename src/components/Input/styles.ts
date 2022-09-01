import styled, {css} from 'styled-components/native';

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

export const Label = styled.Text``;

export const LabelHelper = styled.Text`
  margin-left: 4px;
`;

export const Container = styled.View``;

interface ContentProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Content = styled.View<ContentProps>`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  background: ${({theme}) => theme.colors.input.background};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.input.border.unFocused};
  ${({isFocused, theme}) =>
    isFocused
      ? css`
          border-color: ${theme.colors.input.border.focused};
        `
      : null}
  ${({isErrored, theme}) =>
    isErrored
      ? css`
          border-color: ${theme.colors.input.border.error};
        `
      : null}
  border-radius: 4px;
`;

export const LeftIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 4px;
  margin-right: 8px;
  border-radius: 20px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const RightIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 4px;
  margin-left: 8px;
  border-radius: 20px;
`;

export const ValidIcon = styled.View`
  padding: 4px;
  margin-left: 8px;
`;

export const ErrorMessage = styled.Text`
  font-size: 10px;
  color: ${({theme}) => theme.colors.text.error};
  margin-top: 4px;
`;
