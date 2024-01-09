import React from 'react'
import { useParams } from 'react-router-dom'
import NewsletterSignup from '../components/NewsletterSignup';

const Article = () => {
  (function() {
    window.scrollTo({
      top: 0,
    });
  })()

    const { blogId } = useParams();
  return (
      <div>
          Single article page
      <h1>{blogId}</h1>
      

      <div>
        <NewsletterSignup/>
      </div>
    </div>
  )
}

export default Article
