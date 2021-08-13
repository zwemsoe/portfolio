export default async function fetchAPI({
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
    body: JSON.stringify(data),
  });
  return response.json();
}
