import styled from 'styled-components/native'

export interface ContainerProps {
  mt?: number
  ml?: number
  mr?: number
  mb?: number
  pt?: number
  pl?: number
  pr?: number
  pb?: number
  bdTopLeftRadius?: number
  bdTopRightRadius?: number
  bdBottomLeftRadius?: number
  bdBottomRightRadius?: number
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justify?:
    | 'flex-start'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'flex-end'
  align?: 'flex-start' | 'center' | 'flex-end'
}

export const Container = styled.View<ContainerProps>`
  margin-top: ${({ mt = 0 }) => mt}px;
  margin-left: ${({ ml = 0 }) => ml}px;
  margin-right: ${({ mr = 0 }) => mr}px;
  margin-bottom: ${({ mb = 0 }) => mb}px;

  padding-top: ${({ pt = 0 }) => pt}px;
  padding-left: ${({ pl = 0 }) => pl}px;
  padding-right: ${({ pr = 0 }) => pr}px;
  padding-bottom: ${({ pb = 0 }) => pb}px;

  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'flex-start' }) => align};

  border-top-left-radius: ${({ bdTopLeftRadius = 0 }) => bdTopLeftRadius}px;
  border-top-right-radius: ${({ bdTopRightRadius = 0 }) => bdTopRightRadius}px;
  border-bottom-left-radius: ${({ bdBottomLeftRadius = 0 }) =>
    bdBottomLeftRadius}px;
  border-bottom-right-radius: ${({ bdBottomRightRadius = 0 }) =>
    bdBottomRightRadius}px;
`
