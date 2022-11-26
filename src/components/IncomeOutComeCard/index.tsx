import React from 'react';

import {
  Container,
  OperationText,
  BalanceText,
  LastUpdatedOperationText,
  TextsWrapper,
  FirstRowWrapper,
  CadastrarTextWrapper,
  CadastrarText,
  CadastrarOpacity,
} from './styles';

import {useNavigation} from '@react-navigation/native';

import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface IIncomeOutComeCard {
  operationText: 'Entradas' | 'Saídas';
  balance: number | string;
  lastUpdate: Date | string;
  canSeeBalance?: boolean;
}

const IncomeOutComeCard: React.FC<IIncomeOutComeCard> = ({
  operationText,
  balance,
  lastUpdate,
  canSeeBalance,
}) => {
  const navigate = useNavigation();
  const translator = (text: string): string => {
    return text === 'Entradas' ? 'entrada' : 'saída';
  };

  const numberFormatter = (value: number | string): string => {
    return value.toLocaleString(undefined, {minimumFractionDigits: 2});
  };

  const handleCanSeeBalance = () => {
    const balanceDigitsLength = balance.toString().length;
    if (!canSeeBalance) {
      let finalString = '';
      for (let i = 0; i <= balanceDigitsLength; i++) {
        finalString += '*';
      }
      return finalString;
    }
    return numberFormatter(balance);
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
        <BalanceText>R$ {handleCanSeeBalance()}</BalanceText>
        <LastUpdatedOperationText>
          {`Última ${translator(operationText)} ${lastUpdate}`}
        </LastUpdatedOperationText>
      </TextsWrapper>

      <CadastrarTextWrapper>
        <CadastrarOpacity
          onPress={() =>
            navigate.navigate('Cadastrar', {
              operationText:
                operationText === 'Entradas' ? 'income' : 'outcome',
            })
          }>
          <CadastrarText
            styles={{
              color: `${operationText === 'Entradas' ? '#12A454' : '#E83F5B'}`,
            }}>
            Cadastrar
          </CadastrarText>
        </CadastrarOpacity>
      </CadastrarTextWrapper>
    </Container>
  );
};

export default IncomeOutComeCard;
