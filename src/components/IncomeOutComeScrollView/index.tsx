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
  incomeBalance: number;
  outComeBalance: number;
}

const IncomeOutComeScrollView: React.FC<IIncomeOutComeScrollView> = ({
  canSeeBalance,
  incomeBalance,
  outComeBalance,
}) => {
  const options: IIncomeOutComeCard[] = [
    {
      balance: incomeBalance,
      lastUpdate: new Date().toLocaleDateString(),
      operationText: 'Entradas',
    },
    {
      balance: outComeBalance,
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
