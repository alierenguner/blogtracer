import { AxiosRequestConfig, AxiosResponse } from "axios";

class ProviderBase {
    protected constructor() {

    }
    
    protected transformResult = (url: string, response: AxiosResponse, processor: (response: AxiosResponse) => void) => {
        return response.data;
    }

    protected transformOptions = async (options: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
      if (!options.headers) {
        options.headers = {};
      }


      options.headers.authorization = 'Bearer ' + localStorage.getItem('token');

      return Promise.resolve(options);
    }
}

export default ProviderBase;