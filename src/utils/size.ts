import { Dimensions, PixelRatio, Platform } from 'react-native'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export function widthPercentageToDP(widthPercent: string | number): number {
  const elemWidth = parseFloat(String(widthPercent))
  return PixelRatio.roundToNearestPixel((WIDTH * elemWidth) / 100)
}

export function heightPercentageToDP(heightPercent: string | number): number {
  const elemHeight = parseFloat(String(heightPercent))
  return PixelRatio.roundToNearestPixel((HEIGHT * elemHeight) / 100)
}

export function fontSizePercentage(fontSize: number): number {
  const scale = WIDTH / 320

  const NEW_SIZE = fontSize * scale

  if (Platform.OS === 'ios')
    return Math.round(PixelRatio.roundToNearestPixel(NEW_SIZE))

  return Math.round(PixelRatio.roundToNearestPixel(NEW_SIZE)) - 2
}
