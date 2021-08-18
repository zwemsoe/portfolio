export default async function fetcher({
  method = 'POST',
  endpoint = '/',
  data = {},
}) {
  const response = await fetch(endpoint, {
    method: method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: method === 'POST' ? JSON.stringify(data) : undefined,
  });
  return response.json();
}
