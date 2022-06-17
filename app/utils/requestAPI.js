export default async function requestAPI({
  method = 'POST',
  endpoint = '/',
  data,
}) {
  const response = await fetch(endpoint, {
    method: method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  return response.json();
}
