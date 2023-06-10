export const FetchGetData = async (path) => {
  const token = localStorage.getItem('token')
  let headers = {}
  const url = import.meta.env.VITE_BASE_URL + path

  if (token === null) {
    headers = {
      Origin: import.meta.env.VITE_BASE_URL,
      'X-Requested-With': 'XMLHttpRequest'
    }
  } else {
    headers = {
      Origin: import.meta.env.VITE_BASE_URL,
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `${token}`
    }
  }

  try {
    return await fetch(url, {
      credentials: 'include',
      headers: headers,
      withCredentials: true
    })
  } catch (error) {
    return error
  }
}
