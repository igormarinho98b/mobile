import React, { ReactNode } from 'react'

import { Container, ContainerProps } from './styles'

interface OwnProps extends ContainerProps {
  children: ReactNode
}

function View({ children, ...rest }: OwnProps) {
  return <Container {...rest}>{children}</Container>
}

export default View
