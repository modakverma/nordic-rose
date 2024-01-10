import { useQuery } from "react-query"
import axios from "axios"
import { toast } from "react-toastify";
import { PROD_URL } from "../utils/http";

const onError = (error) => {
  toast.error(error.message);
}

export const useBlogData = (blogId) => {
  const fetchBlogData = () => {
    return axios.get(`${PROD_URL}/article/${blogId}`)
  }
  return useQuery(['blog',blogId],fetchBlogData, {
    onError,
  })
}

export default useBlogData