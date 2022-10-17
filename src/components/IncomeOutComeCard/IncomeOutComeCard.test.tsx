import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import IncomeOutComeCard from './index';

test('IncomeOutComeCard test suite', () => {
  const mockFn = jest.fn();

  const props = {
    balance: 2000,
    lastUpdate: new Date().toLocaleDateString(),
    operationText: 'Entradas',
    canSeeBalance: false,
  };

  render(<IncomeOutComeCard {...props} operationText="Entradas" />);
});
