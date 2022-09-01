import styled from 'styled-components/native'

export const Container = styled.View`
  width: 45px;
  height: 45px;

  background: ${({ theme }) => theme.colors.marker.user.background};

  justify-content: center;
  align-items: center;

  border-radius: 25px;
`

export const Content = styled.View`
  width: 29px;
  height: 29px;

  border-radius: 25px;

  background: ${({ theme }) => theme.colors.marker.user.content};
`
