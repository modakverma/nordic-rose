import React from 'react'
import { useParams } from 'react-router-dom'
import NewsletterSignup from '../components/NewsletterSignup';
import Loader from '../components/Loader';
import Error from '../components/Error';
import BlogCard from '../components/BlogCard';
import Anchor from '../base-components/Anchor/index'
import SocialLink from '../components/SocialLink';
import eyesUrl from '../assets/eyes.svg'
import useBlogData from '../hooks/useBlogData';

const Article = () => {
  // SCROLL TO TOP Fn
  (function () {
    window.scrollTo({
      top: 0,
    });
  })()

  const { blogId } = useParams();

  const { data, isLoading, isError, error} = useBlogData(blogId);

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
        <div className='md:px-40 sm:px-20 px-10 py-10 flex flex-col gap-5'>
          <h1 className='font-black text-4xl'>{article.title}</h1>
          <p className='font-sans text-base font-light'>{ article.subtitle}</p>
        </div>
        <img
          className='w-full'
          src={article.bannerImg} alt="" />
      </div>

      {/* ARTICLE DATA */}
      <div className='w-full h-full p-6 sm:px-20 md:px-40 lg:px-80 pb-20'>
        <div className='border-t-2 border-black'>
          {/* AUTHOR DETAILS 1 */}
          <div className='flex justify-between items-center'>
          <div className='flex gap-2 font-sans py-4'>
            <img
              className='w-10 rounded-full'
              src={article.Author.profileImg} alt="" />
            <div>
              <h1>{article.Author.fullName}</h1>
              <p className='font-light text-sm'>{ article.createdAt}</p>
            </div>
            </div>
            <SocialLink linkFb={article.Author.linkFb} linkTwt={article.Author.linkTwt} />
          </div>

          <div className='flex flex-col gap-8 py-6 items-center'>
            <p>{article.shortDesc}</p>
            <h1 className='font-bold text-xl font-sans flex-start w-full'>{article.subheading}</h1>
            <div className='text-center font-sans text-sm lg:text-lg font-medium  sm:w-[120%]'>
              <img className='w-full' src={article.contentImg} alt="cotent-img" />
              <p className='px-20'>{ article.contentImgDesc}</p>
            </div>
            <p>{ article.description}</p>
          </div>


        <div className='flex flex-col gap-8 py-10'>
        {/* SHARE ON MEDIA */}
        <SocialLink
        className='h-16'
          linkFb='/'
          FbText='Share on Facebook'
          TwtText='Share on Facebook'
        linkTwt='/'
            />
            {/* TAGS */}
            <h1 className='flex gap-2 font-sans'>
            Tags: 
          {article.Tags.map(tag => (
            <Anchor
              className="border-black lowercase"
              key={tag.id}>{tag.title}</Anchor>
          ))}
          </h1>
            </div>
        </div>
        
      {/* AUTHOR DETAILS 2 */}
      <div className='flex w-full items-center'>
          <div className='flex gap-2 py-4'>
            <img
              className='w-20 h-20 rounded-full'
              src={article.Author.profileImg} alt="" />
            <div >
              <h1 className='font-sans font-semibold text-normal text-base'>{article.Author.fullName}
                <span className='pl-2 font-light text-sm'>{ article.Author.about}</span>
              </h1>
            </div>
            </div>
        </div>
      </div>

      {/* READ NEXT SECTION */}
      <div className='relative w-full flex flex-col items-center px-40 py-20 border-t-[1.5px] border-black'>
        <img src={eyesUrl} alt="eyesImg" className='absolute -top-8' />
        <div className='flex flex-col items-center'>
          <h1 className='font-black text-3xl'>What to read next</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {readNext.map(blog => (
            <BlogCard
              className="text-sm w-full"
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
