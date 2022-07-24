import { IResponse } from '../types/http.types';
import { HttpServiceFactory } from './index';

import { HttpService } from './http.service';
import { IPlan, ITree, ITreePlan, treeData } from '../types/home.types';

export class HomeService {
  constructor(private httpService: HttpService) {}

  public getTrees(): Promise<ITree[] | undefined | void> {
    return this.httpService.get('api/trees/');
  }
  public createTree(treeData: any) {
    return this.httpService.post('api/trees/', treeData);
  }

  public createTreePlan(plan: IPlan, treeId: number) {
    return this.httpService.post(`api/trees/${treeId}/plan/`, plan);
  }
}

const factory = new HttpServiceFactory();
export const homeService = new HomeService(factory.createHttpService());
