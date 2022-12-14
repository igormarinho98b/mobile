import styled from 'styled-components/native';

export const Container = styled.View`
  width: 300px;
  height: 183px;
  background-color: #fff;
  margin-right: 30px;
  margin-top: 24px;
  border-radius: 5px;
  padding: 24px;
`;

export const OperationText = styled.Text`
  color: #363f5f;
  font-size: 14px;
`;

export const TextsWrapper = styled.View`
  margin-top: 40px;
`;

export const BalanceText = styled.Text`
  font-size: 32px;
  line-height: 48px;
  font-weight: 500;
  color: #363f5f;
`;

export const LastUpdatedOperationText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #969cb2;
`;

export const FirstRowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CadastrarTextWrapper = styled.View`
  align-items: flex-end;
  margin-top: 10px;
`;

export const CadastrarOpacity = styled.TouchableOpacity``;

export const CadastrarText = styled.Text`
  color: #12a454;
`;
