import { Dimensions, Platform } from 'react-native'
import {
  getStatusBarHeight,
  getBottomSpace
} from 'react-native-iphone-x-helper'

import { heightPercentageToDP, widthPercentageToDP } from 'src/utils/size'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
const { height: screenHeight } = Dimensions.get('screen')

const androidBottomSpace = screenHeight - windowHeight

export default {
  window: {
    width: windowWidth,
    height: windowHeight
  },
  sizePercent: {
    width: (size: number): number => widthPercentageToDP(size),
    height: (size: number): number => heightPercentageToDP(size)
  },
  statusBarHeight: Platform.select({
    android: getStatusBarHeight(),
    ios: getStatusBarHeight(),
    default: 0
  }),
  bottomSpace: Platform.select({
    android: androidBottomSpace,
    ios: getBottomSpace(),
    default: 0
  })
}
