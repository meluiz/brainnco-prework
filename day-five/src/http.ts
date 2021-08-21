const request = (url: string, options?: RequestInit) =>
  fetch(url, options)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))


type DataOptionsType = {
  plate: string;
  image?: string;
  brandModel?: string;
  year?: string;
  color?: string;
}

const createRequest = (method: 'POST' | 'DELETE') => (url: string, data: DataOptionsType) => request(url, {
  method,
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
})

export const get = request
export const post = createRequest('POST')
export const del = createRequest('DELETE')
