import {AxiosPromise} from 'axios';
import api from 'src/services/api';

export const getUserIncomeBalance = (
  id: string,
  token: string,
): AxiosPromise => {
  return api.get(`v1/income/balance/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserOutcomeBalance = (
  id: string,
  token: string,
): AxiosPromise => {
  return api.get(`v1/outcome/balance/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getBalanceDetails = (id: string, token: string): AxiosPromise => {
  return api.get(`v1/balance-details/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
