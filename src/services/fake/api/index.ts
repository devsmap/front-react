import { AxiosResponse } from 'axios';
import techsFakeAPI from './techs';
import botJobsFakeAPI from './botJobs';

const response: AxiosResponse = {
  data: null,
  status: 404,
  statusText: '',
  headers: {},
  config: {},
};

const api = {
  get: (entity: string, value = 0): AxiosResponse => {
    switch (entity) {
      case 'category':
        return {
          ...response,
          data: techsFakeAPI.get(),
          status: 200,
        };

      case 'botjobs':
        return {
          ...response,
          data: botJobsFakeAPI.get(value),
          status: 200,
        };

      default:
        return response;
    }
  },
};

export default api;
