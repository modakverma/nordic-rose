import React from 'react'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge';
const BlogCard = ({ blog,className }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${blog.id}`)
  }
  return (
    <div
      onClick={handleClick}
      className={twMerge([
        'text-xl font-sans group flex w-full h-full flex-col gap-2 cursor-pointer hover:bg-slate-300/15  transition p-3 rounded-xl',
        className
      ])}>
      <div className='relative w-full h-48 transition overflow-hidden'>
      <img
      className='w-full h-full absolute group-hover:scale-125 transition group-hover:translate-x-4 group-hover:translate-y-4'
      src={blog.bannerImg} alt="blog-article-card-img" />
      </div>
      <h1 className='text-center group-hover:-translate-y-2 transition font-medium p-2 px-8'>{blog.title}</h1>
    </div>
  )
}

export default BlogCard
