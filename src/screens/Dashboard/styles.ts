import styled from 'styled-components/native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
  background-color: #5636d3;
`;

export const TextBold = styled.Text`
  font-weight: bold;
`;

export const HelloUser = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  line-height: 28px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;