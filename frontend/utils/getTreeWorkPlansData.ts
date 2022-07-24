import { ITree } from '../types/home.types';

export const getTreeWorkPlansData = (data: ITree) => {
  const { tree_work_plans } = data;
  return tree_work_plans;
};
