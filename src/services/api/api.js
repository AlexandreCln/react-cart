export class NotFoundError extends Error { }

export async function api (url) {
  const response = await fetch(url);
  const status = response.status;

  if (status >= 200 && status < 400) {
    return response.json();
  }
  if (status === 404) {
    throw new NotFoundError();
  }
}