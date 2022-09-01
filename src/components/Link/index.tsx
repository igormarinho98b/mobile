import React from 'react'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import SpinKit from 'react-native-spinkit'

import { useTheme } from 'styled-components/native'

import { Container, Text } from './styles'

export interface OwnProps {
  children: string
  action?: () => void
  disabled?: boolean
  containerStyle?: ViewStyle
  loading?: boolean
  style?: TextStyle
  underlined?: boolean
}

function Link({
  children,
  action,
  disabled = false,
  loading = false,
  underlined = false,
  containerStyle,
  style,
  ...rest
}: OwnProps) {
  const theme = useTheme()

  const { color = theme.colors.text.primary } = StyleSheet.flatten(style)

  return (
    <Container
      disabled={disabled || loading || !action}
      hitSlop={{
        top: 8,
        left: 8,
        right: 8,
        bottom: 8
      }}
      style={containerStyle}
      onPress={action}>
      {loading ? (
        <SpinKit color={color.toString()} size={25} type="Bounce" />
      ) : (
        <Text {...rest} color={color} style={style} underlined={underlined}>
          {children}
        </Text>
      )}
    </Container>
  )
}

export default Link
