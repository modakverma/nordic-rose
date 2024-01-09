import axios from 'axios'
import { useQuery } from 'react-query'

export const useSearchData = (url,id) => {
  const fetchArticles = () => {
    return axios.get(url)
  }
    return useQuery(id, fetchArticles, {
    enabled: false, 
    staleTime:30000
  })
}

export default useSearchData