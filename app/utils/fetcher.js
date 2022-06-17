export default async function fetcher(path) {
  const res = await fetch(path);
  return res.json();
}
