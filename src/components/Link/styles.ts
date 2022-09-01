import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})``

interface TextProps {
  color: string
  disabled: boolean
  underlined: boolean
}

export const Text = styled.Text<TextProps>`
  text-decoration: ${({ underlined }) => (underlined ? 'underline' : 'none')};
  text-decoration-color: ${({ color }) => color};
`
