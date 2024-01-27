import axios, { AxiosError } from "axios";
import endpoints from "./endpoints";

const instance = axios.create({
  baseURL: '',
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no=cache',
    Expires: '0',
  },
  maxRedirects: 0,
});

instance.interceptors.response.use(
  async (response) => response.data,
  async (error: AxiosError) => {
    if (axios.isCancel(error)) return;
    throw error;
  },
);

const api = {
  requestExample: {
    post: (param: any, body: any): Promise<any> => instance.post(`${endpoints.endpointExample.path}/${param}`, body),
  },
};

export default api;