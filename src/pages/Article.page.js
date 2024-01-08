import React from 'react'
import { useParams } from 'react-router-dom'

const Article = () => {
    const { blogId } = useParams();
  return (
      <div>
          Single article page
          <h1>{blogId}</h1>
    </div>
  )
}

export default Article
