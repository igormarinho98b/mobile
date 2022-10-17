import React from 'react';

import {Container} from './styles';

import IncomeOutComeCard from '../IncomeOutComeCard';

interface IIncomeOutComeCard {
  operationText: 'Entradas' | 'Saídas';
  balance: number | string;
  lastUpdate: Date | string;
}

interface IIncomeOutComeScrollView {
  canSeeBalance?: boolean;
}

const IncomeOutComeScrollView: React.FC<IIncomeOutComeScrollView> = ({
  canSeeBalance,
}) => {
  const options: IIncomeOutComeCard[] = [
    {
      balance: 17400,
      lastUpdate: new Date().toLocaleDateString(),
      operationText: 'Entradas',
    },
    {
      balance: 5600.33,
      lastUpdate: new Date().toLocaleDateString(),
      operationText: 'Saídas',
    },
  ];

  return (
    <Container horizontal={true}>
      {options.length &&
        options.map((option, index) => (
          <IncomeOutComeCard
            key={index}
            balance={option.balance}
            operationText={option.operationText}
            lastUpdate={option.lastUpdate}
            canSeeBalance={canSeeBalance}
          />
        ))}
    </Container>
  );
};

export default IncomeOutComeScrollView;
