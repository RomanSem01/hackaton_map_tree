export interface IHomeFormValues {
  age: number;
  family: string;
  radius: number;
  condition: string;
}

export interface treeData {
  latitude: number;
  longitude: number;
  radius: number;
  age: number;
  family: string;
  condition: string;
  image: string;
}
export interface ITreePlan {
  id: number;
  plan: string;
  is_done: boolean;
}

export interface IPlan {
  plan: string;
}

export interface ITree {
  age: number;
  id: number;
  latitude: number;
  longitude: number;
  radius: number;
  family: string;
  condition: string;
  location: string;
  color: string;
  image?: string;
  tree_work_plans: ITreePlan[];
}

export interface IHiddenPart {
  data: ITreePlan[];
  treeId: number;
  refetch: () => void;
}

export interface IPlanCreateData {
  treeId: number;
  plan: string;
}
