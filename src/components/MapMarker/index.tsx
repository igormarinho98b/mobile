import React from 'react'
import { Marker } from 'react-native-maps'

import { Coords } from 'src/hooks/useUserLocation'

import { Container, Content } from './styles'

interface OwnProps {
  coordinate?: Coords
}

function MapMarker({ coordinate }: OwnProps) {
  if (!coordinate?.latitude || !coordinate.longitude) return null

  return (
    <Marker coordinate={coordinate}>
      <Container>
        <Content />
      </Container>
    </Marker>
  )
}

export default MapMarker
