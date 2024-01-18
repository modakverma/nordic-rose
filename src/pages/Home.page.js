import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import useFetchData from '../hooks/useFetchData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { PROD_URL } from '../utils/http';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';
import { RESPONSIVE_WIDTH } from '../utils/constants';

const Home = () => {
    const navigate = useNavigate()
    const [perPage,setPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [bannerData, setBannerData] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const subUrl = `/home?perPage=${perPage}&pageNo=${currentPage}&currentBanner=${bannerData?.id}`;

    // FETCHING HOME PAGE DATA 
    const { isLoading, data, isError, error, refetch } = useFetchData(PROD_URL + subUrl, 'home')
    
    useEffect(() => {
        if (data && data.data && data.data.banner) {
            setBannerData(data.data.banner)
        }
    }, [data]);

    // useEffect(() => {
    //     if (screenWidth < RESPONSIVE_WIDTH) {
    //         setPerPage(6);
    //         refetch()
    //     }
    //     else {
    //         setPerPage(12)
    //         refetch()
    //     }
    //       const handleResize = () => {
    //         setScreenWidth(window.innerWidth);
    //       };
    //       window.addEventListener('resize', handleResize);
    //       return () => {
    //       window.removeEventListener('resize', handleResize);
    //       };
    // },[])
    
    useEffect(() => {
        refetch();
    },[currentPage])
    
    if (isLoading) {
        return <div className='w-full h-40 flex items-center justify-center'>
            <Loader/>
        </div>
    }
    if (isError) {
        return <Error error={error} />
    }

    const { blogs, totalPages } = data?.data;
   
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleBannerBlogNavigate = () => [
        navigate(`/blog/${bannerData.id}`)
    ]

    const handlePaginationNext = () => {
        if (currentPage<totalPages.length) {
            setCurrentPage(prev=>prev+1)
        }
    }
    const handlePaginationPrev = () => {
        if (currentPage>1) {
            setCurrentPage(prev=>prev-1)
        }
    }

    return (
        <div className='bg-primary flex flex-col items-center py-20'>
            {bannerData ? <div className='sm:px-6 lg:px-32 xl:px-72 flex w-full justify-center flex-col gap-8 pb-10 items-center'>
                <img
                    onClick={handleBannerBlogNavigate}
                    src={bannerData.bannerImg}
                    className='hover:opacity-85 transition cursor-pointer h-full w-full'
                    alt="bannerImg"
                />
                <h1 className='px-6 leading-tight font-semibold text-5xl text-center'>{bannerData.title}</h1>
                <p className='w-3/5 text-center font-sans font-light text-xl tracking-wide'>{ bannerData.subtitle}</p>
            </div> : null}
            
            {/* === ARTICLES SECTION === */}
            <div className='lg:w-auto pt-16 border-t-2 border-black flex items-center justify-center flex-col'>
            <h1 className='font-black text-4xl pb-8'>All Articles</h1>
            <div className='font-sans w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:px-10'>
            {blogs?.map(blog => (
                <BlogCard key={blog.id} blog={blog}  />
            ))}
            </div>
            </div>
            {/* PAGINATION */}
            <div className='flex font-sans gap-5 pt-12 w-full items-center justify-center'>
                {currentPage>1 ?<span
                    onClick={handlePaginationPrev}
                    className='cursor-pointer hover:scale-125 transition'>{'<< '}prev</span> :
                    null
                }
                {totalPages.map(page => (
                    <div
                        onClick={()=>handlePageChange(page)}
                        className={twMerge([
                            'rounded w-6 h-6 text-slate-800 bg-slate-200 flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-slate-300 transition',
                            page === currentPage && 'scale-110 bg-slate-300 border border-slate-400/10 shadow'
                        ])}>{page}</div>
                ))}
                {currentPage<totalPages.length?<span
                    onClick={handlePaginationNext}
                    className='cursor-pointer hover:scale-125 transition'>next{' >>'}
                </span> :
                null
                }
            </div>
        </div>
    )
}

export default Home;
