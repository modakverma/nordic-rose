import React from 'react'
import BlogCard from '../components/BlogCard'
import useFetchData from '../hooks/useFetchData';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Home = () => {
    const url = 'http://localhost:4000/home';
    const { isLoading, data, isError, error } = useFetchData(url,'home')

    if (isLoading) {
        return <Loader/>
    }
    if (isError) {
        return <Error error={error} />
    }

    const { blogs, banner } = data?.data;
    
    const paginationArray = [...Array(3).keys()].slice(1);

    return (
        <div className='bg-primary flex flex-col items-center py-20'>
            <div className='flex w-[56rem] justify-center flex-col gap-5 pb-8 items-center'>
                <img src={banner.bannerImg}
                    className='h-[32rem] w-full'
                    alt="bannerImg"
                />
                <h1 className='font-black text-5xl text-center'>{banner.title}</h1>
                <p className='w-3/5 text-center font-sans font-light text-xl tracking-wide'>{ banner.subtitle}</p>
            </div>
            <div className='border-t-[1.8px] w-[40rem] pt-10 border-black flex items-center justify-center w-full flex-col'>
            <h1 className='font-black text-3xl pb-6'>All Articles</h1>
            <div className='font-sans w-full grid grid-cols-1 md:grid-cols-2 gap-y-4'>
            {blogs?.map(blog => (
                <BlogCard key={blog.id} blog={blog}  />
            ))}
            </div>
            </div>
            {/* PAGINATION */}
            <div className='flex gap-5 pt-12 w-full items-center justify-center'>
                <span className='cursor-pointer hover:scale-125 transition'>{'<< '}prev</span>
                {paginationArray.map(page => (
                <div className='rounded w-6 h-6 bg-slate-200 flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-slate-300 transition'>{page}</div>
                ))}
                <span className='cursor-pointer hover:scale-125 transition'>next{' >>'}</span>
            </div>
        </div>
    )
}

export default Home;
