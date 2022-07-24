import { ITree } from '../types/home.types';

export const getFilteredData = (data: ITree) => {
  const { age, family, condition, location } = data;
  return { age, family, condition, location };
};
