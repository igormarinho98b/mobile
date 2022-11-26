import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
  background-color: #5636d3;
  position: relative;
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

export const TopHeaderIconsWrapper = styled.View`
  width: 60px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ListViewWrapper = styled.View`
  background-color: #f0f2f5;
  width: 100%;
  min-height: 65%;
  z-index: -1;
  padding: 64px 24px 0px 24px;
`;

export const ListText = styled.Text`
  color: #000;
  font-size: 18px;
`;
