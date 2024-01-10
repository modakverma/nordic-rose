import React from 'react'
import { useParams } from 'react-router-dom'
import NewsletterSignup from '../components/NewsletterSignup';
import useFetchData from '../hooks/useFetchData';
import { PROD_URL } from '../utils/http';
import Loader from '../components/Loader';
import Error from '../components/Error';
import BlogCard from '../components/BlogCard';

const Article = () => {
  // SCROLL TO TOP Fn
  (function() {
    window.scrollTo({
      top: 0,
    });
  })()

  const { blogId } = useParams();
  const subUrl = `/article/${blogId}`

  const { data, isLoading, isError,error } = useFetchData(PROD_URL + subUrl, 'article');

  if (isLoading) {
    return <Loader/>
  }
  if (isError) {
    return <Error error={error}/>
  }
  const { readNext,article } = data?.data;
  console.log(data)

  return (
      <div className='w-full flex flex-col items-center '>
      <div className='w-full flex flex-col items-center text-center'>
        <div className='md:px-40 sm:px-20 px-10 '>
          <h1 className='font-black text-2xl'>{article.title}</h1>
          <p className='font-sans text-sm font-light'>{ article.subtitle}</p>
        </div>
        <img
          className='w-full'
          src={article.bannerImg} alt="" />
      </div>
      

      <div className='w-full flex flex-col items-center px-40 py-10 border-t-[1.5px] border-black'>
        <div className='flex flex-col items-center'>
          <h1 className='font-black text-2xl'>What to read next</h1>
          <div className='grid grid-cols-3'>
          {readNext.map(blog => (
            <BlogCard
              className="text-sm"
              blog={blog} />
          ))
          }
          </div>
        </div>
        <NewsletterSignup/>
      </div>
    </div>
  )
}

export default Article
