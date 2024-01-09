import axios from 'axios'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify';

const onError = (error) => {
  toast.error(error.message);
}

export const useFetchData = (url,id) => {
  const fetchArticles = () => {
    return axios.get(url)
  }
  return useQuery(id, fetchArticles,{
    onError
  })
}

export default useFetchData
