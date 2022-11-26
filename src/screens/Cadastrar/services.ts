import {AxiosPromise} from 'axios';
import api from 'src/services/api';

interface IIncomeCreateProps {
  description: string;
  value: number;
  date: Date;
  userId: string;
  categoriesId: string;
}

export const incomeCreate = ({
  description,
  value,
  date,
  userId,
  categoriesId,
}: IIncomeCreateProps): AxiosPromise => {
  return api.post('v1/income/create', {
    description,
    value,
    date,
    userId,
    categoriesId,
  });
};

export const outcome = ({
  description,
  value,
  date,
  userId,
  categoriesId,
}: IIncomeCreateProps): AxiosPromise => {
  return api.post('v1/outcome/create', {
    description,
    value,
    date,
    userId,
    categoriesId,
  });
};

export const getCategories = (token: string): AxiosPromise => {
  return api.get('v1/categories/list', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
