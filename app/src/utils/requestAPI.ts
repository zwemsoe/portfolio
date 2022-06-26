type APIMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IRequest {
  method: APIMethods;
  endpoint: string;
  data?: any;
}

export const requestAPI = async ({
  method = 'POST',
  endpoint = '/',
  data,
}: IRequest) => {
  const response = await fetch(endpoint, {
    method: method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  return response.json();
};
