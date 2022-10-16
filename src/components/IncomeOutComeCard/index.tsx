import React from 'react';

import {
  Container,
  OperationText,
  BalanceText,
  LastUpdatedOperationText,
  TextsWrapper,
} from './styles';

interface IIncomeOutComeCard {
  operationText: 'Entradas' | 'Saídas';
  balance: number | string;
  lastUpdate: Date | string;
}

const IncomeOutComeCard: React.FC<IIncomeOutComeCard> = ({
  operationText,
  balance,
  lastUpdate,
}) => {
  const translator = (text: string): string => {
    return text === 'Entradas' ? 'entrada' : 'saída';
  };
  return (
    <Container>
      <OperationText>{operationText}</OperationText>

      <TextsWrapper>
        <BalanceText>R$ {balance.toLocaleString()}</BalanceText>
        <LastUpdatedOperationText>
          {`Última ${translator(operationText)} ${lastUpdate}`}
        </LastUpdatedOperationText>
      </TextsWrapper>
    </Container>
  );
};

export default IncomeOutComeCard;
