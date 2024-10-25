import type {AxiosResponse} from "axios";

export interface IAnswerRequestHandler {
  error: boolean,
  errorMessage: string[],
  data?: any
}

export function requestHandler(axiosAnswer: Promise<AxiosResponse>): Promise<IAnswerRequestHandler> {
  return new Promise((resolve) => {
    axiosAnswer.then(
      (res: AxiosResponse) => {
        resolve({error: false, errorMessage: [], data: res.data});
      }
    ).catch((error) => {
      resolve({error: true, errorMessage: error.response.data.message, data: undefined});
    });
  });
}
