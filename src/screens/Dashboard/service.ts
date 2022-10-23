import {AxiosPromise} from 'axios';
import api from 'src/services/api';

export const getUserIncomeBalance = (id: string): AxiosPromise => {
  return api.get(`v1/income/balance/${id}`);
};

export const getUserOutcomeBalance = (id: string): AxiosPromise => {
  return api.get(`v1/outcome/balance/${id}`);
};
