import styled, { css } from 'styled-components/native'

interface ContainerProps {
  alignedTo: 'right' | 'left'
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})<ContainerProps>`
  ${({ alignedTo }) => css`
    margin-${alignedTo}: 8px;
  `};
`
