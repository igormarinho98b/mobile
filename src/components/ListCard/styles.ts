import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 130px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 24px;

  justify-content: space-between;
`;

export const LabelText = styled.Text`
  font-size: 14px;
  color: #363f5f;
`;

export const Value = styled.Text`
  color: #12a454;
  font-size: 20px;
`;

export const CategoryText = styled.Text`
  color: #969cb3;
  font-size: 14px;
`;

export const Date = styled.Text`
  color: #969cb3;
  font-size: 14px;
`;

export const LastLineWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
