import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  height: ${Dimensions.get('window').height}px;
`;

export const UpperContainer = styled.View`
  flex: 3;
  background-color: #0154c6;
  width: 100%;
  padding-top: ${getStatusBarHeight() +
  Dimensions.get('screen').height * 0.05}px;
  justify-content: space-around;
  align-items: center;
`;

export const BottomContainer = styled.View`
  flex: 1;
  background-color: #ff872c;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  left: 100px;
`;

export const SubTitle = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: 500;
  line-height: 40px;
  width: ${Dimensions.get('screen').width * 0.6}px;
`;

export const LoginText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #fff;
  width: 190px;
  right: 48px;
  bottom: 50px;
  letter-spacing: 1.3px;
`;

export const InputsWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  padding: 0 15px;
  bottom: 80px;
`;

export const InputView = styled.View`
  height: ${Dimensions.get('screen').height * 0.07}px;
`;

export const ButtonView = styled.View`
  bottom: ${getBottomSpace() + Dimensions.get('screen').height * 0.05}px;
  justify-content: space-between;
  height: ${Dimensions.get('screen').height * 0.14}px;
  padding: 0 15px;
`;
