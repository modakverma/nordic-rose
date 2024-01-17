import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NewsletterSignup from '../components/NewsletterSignup';
import Loader from '../components/Loader';
import Error from '../components/Error';
import BlogCard from '../components/BlogCard';
import Anchor from '../base-components/Anchor/index'
import SocialLink from '../components/SocialLink';
import eyesUrl from '../assets/eyes.svg'
import useBlogData from '../hooks/useBlogData';
import { RESPONSIVE_WIDTH } from '../utils/constants';

const Article = () => {
  const { blogId } = useParams();
  const [perPage, setPerPage] = useState(6);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // FETCHING DATA
  const { data, isLoading, isError, error,refetch} = useBlogData(blogId,perPage);
  useEffect(() => {
    if (screenWidth < RESPONSIVE_WIDTH) {
      setPerPage(3);
      refetch()
    }
    else {
      setPerPage(6)
      refetch()
    }
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
    window.removeEventListener('resize', handleResize);
    };
  },[screenWidth])
  if (isLoading) {
    return <div className='w-full h-40 flex items-center justify-center'>
    <Loader/>
</div>
  }
  if (isError) {
    return <Error error={error}/>
  }

  const { readNext,article } = data?.data;
  const time = new Date(article.createdAt).toDateString();
  const getAverageReadTime = () => {
    const articleLength = article.shortDesc.split(' ').length + article.description.split(' ').length;
    const readTime = Math.round(articleLength / 200);
    return readTime
  }

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
          <div className='flex flex-col sm:flex-row justify-between sm:items-center'>
          <div className='flex gap-2 font-sans py-4'>
            <img className='w-10 rounded-full'
              src={article.Author.profileImg} alt="author-img" />
            <div>
              <h1 className='text-md sm:text-normal'>{article.Author.fullName}</h1>
                <p className='font-light text-xs sm:text-sm'>{time}{' . '}{getAverageReadTime()} min read</p>
            </div>
            </div>
          <SocialLink
            className='w-full sm:w-auto'
            linkFb={article.Author.linkFb}
            linkTwt={article.Author.linkTwt}
            linkWa={RESPONSIVE_WIDTH>screenWidth ? article.Author.linkWa: null}
          />
          </div>

          <div className='flex flex-col gap-8 py-6 items-center'>
            <p>{article.shortDesc}</p>
            <h1 className='font-bold text-xl font-sans flex-start w-full'>{article.subheading}</h1>
            <div className='text-center font-sans text-sm lg:text-md font-medium sm:w-[110%]'>
              <img className='w-full' src={article.contentImg} alt="cotent-img" />
              <p className='sm:px-20 mt-2'>{article.contentImgDesc}</p>
            </div>
            <p>{ article.description}</p>
          </div>

        <div className='flex flex-col gap-8 py-10'>
        {/* SHARE ON MEDIA */}
        <SocialLink
        className='sm:h-16'
          linkFb=' '
          linkTwt=' '
          linkWa=' '
          FbText='Share on Facebook'
          TwtText='Share on Facebook'
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
      <div className='relative w-full flex flex-col items-center py-10 border-t-[1.5px] border-black'>
        <img src={eyesUrl} alt="eyesImg" className='absolute -top-8' />
        <div className='flex flex-col items-center py-16 w-auto'>
          <h1 className='font-black text-3xl'>What to read next</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          {readNext.map(blog => (
            <BlogCard blog={blog} />
          ))}
          </div>
        </div>
        <div className='sm:w-[30rem]'>
        <NewsletterSignup/>
        </div>
      </div>
    </div>
  )
}
export default Article