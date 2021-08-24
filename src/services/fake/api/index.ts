import { AxiosResponse } from 'axios';
import techsFakeAPI from './techs';

const response: AxiosResponse = {
  data: null,
  status: 404,
  statusText: '',
  headers: {},
  config: {},
};

const api = {
  get: (entity: string): AxiosResponse => {
    switch (entity) {
      case 'category':
        return {
          ...response,
          data: techsFakeAPI.get(),
          status: 200,
        };

      default:
        return response;
    }
  },
};

export default api;
