import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import useFetchData from '../hooks/useFetchData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { PROD_URL } from '../utils/http';
import { twMerge } from 'tailwind-merge';

const Home = () => {
    const perPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const[bannerData,setBannerData] = useState(null)
    const subUrl = `/home?perPage=${perPage}&pageNo=${currentPage}&currentBanner=${bannerData?.id}`;
    const { isLoading, data, isError, error, refetch } = useFetchData(PROD_URL + subUrl, 'home')
    
    useEffect(() => {
        if (data && data.data && data.data.banner) {
            setBannerData(data.data.banner)
        }
    }, [data]);
    
    useEffect(() => {
        refetch()
    },[currentPage])
    
    if (isLoading) {
        return <Loader/>
    }
    if (isError) {
        return <Error error={error} />
    }

    const { blogs, totalPages } = data?.data;
   
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    return (
        <div className='bg-primary flex flex-col items-center py-20'>
           {bannerData ? <div className='flex w-[56rem] justify-center flex-col gap-5 pb-8 items-center'>
                <img src={bannerData.bannerImg}
                    className='h-[32rem] w-full'
                    alt="bannerImg"
                />
                <h1 className='font-black text-5xl text-center'>{bannerData.title}</h1>
                <p className='w-3/5 text-center font-sans font-light text-xl tracking-wide'>{ bannerData.subtitle}</p>
            </div>:null}
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
                {totalPages.map(page => (
                    <div
                        onClick={()=>handlePageChange(page)}
                        className={twMerge([
                            'rounded w-6 h-6 bg-slate-200 flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-slate-300 transition',
                            page === currentPage && 'scale-125 bg-slate-300 border border-slate-400/70'
                        ])}>{page}</div>
                ))}
                <span className='cursor-pointer hover:scale-125 transition'>next{' >>'}
                </span>
            </div>
        </div>
    )
}

export default Home;
