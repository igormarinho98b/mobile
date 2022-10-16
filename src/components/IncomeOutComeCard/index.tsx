import React from 'react';

import {
  Container,
  OperationText,
  BalanceText,
  LastUpdatedOperationText,
  TextsWrapper,
  FirstRowWrapper,
} from './styles';

import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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

  const numberFormatter = (value: number | string): string => {
    return value.toLocaleString(undefined, {minimumFractionDigits: 2});
  };

  return (
    <Container>
      <FirstRowWrapper>
        <OperationText>{operationText}</OperationText>
        <FontAwesomeIcon
          icon={
            operationText === 'Entradas'
              ? faArrowAltCircleUp
              : faArrowAltCircleDown
          }
          color={operationText === 'Entradas' ? '#12A454' : '#E83F5B'}
          size={20}
        />
      </FirstRowWrapper>

      <TextsWrapper>
        <BalanceText>R$ {numberFormatter(balance)}</BalanceText>
        <LastUpdatedOperationText>
          {`Última ${translator(operationText)} ${lastUpdate}`}
        </LastUpdatedOperationText>
      </TextsWrapper>
    </Container>
  );
};

export default IncomeOutComeCard;
