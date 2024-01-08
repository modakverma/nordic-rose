import { useQuery } from "react-query"
import axios from "axios"

const fetchBlogData = (blogId) => {
    return axios.get(`http://localhost:4000/blogs/${blogId}`)
}

const useBlogData = (blogId) => {
  return useQuery(['blog',blogId],fetchBlogData(blogId))
}

export default useBlogData
