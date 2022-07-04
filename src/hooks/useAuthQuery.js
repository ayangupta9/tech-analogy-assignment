import { useQuery } from 'react-query'
import { AUTH_MICROSERVICE_BASE_URL } from '../App'

function useAuthQuery (onSuccess, onError) {
  async function fetchAuth () {
    const response = await fetch(AUTH_MICROSERVICE_BASE_URL + 'api/profile/', {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Credentials': true
      }
    })
    const result = await response.json()
    return result
  }

  return useQuery('authData', fetchAuth, {
    cacheTime: 1000 * 60 * 15,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchInterval: 1000 * 60 * 15,
    // select: data => {
    //   return data
    // },
    onSuccess: onSuccess,
    onError: onError
  })
}

export default useAuthQuery
