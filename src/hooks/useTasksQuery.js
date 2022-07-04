import { useQuery } from 'react-query'
import { TASKS_MICROSERVICE_BASE_URL } from '../App'

function useTasksQuery (onSuccess, userId) {
  async function fetchAllTasks () {
    const response = await fetch(
      TASKS_MICROSERVICE_BASE_URL + 'task/user/' + userId,
      {
        method: 'GET',
        // credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true
        }
      }
    )

    const result = await (await response).json()
    return result
  }

  return useQuery('tasksData', fetchAllTasks, {
    cacheTime: 1000 * 60 * 15,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchInterval: 1000 * 60 * 15,
    // select: data => {
    //   return data.json()
    // },
    onSuccess: onSuccess
  })
}

export default useTasksQuery
