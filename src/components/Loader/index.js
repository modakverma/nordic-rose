import React from 'react'

const Loader = () => {
  return (
    <div className='flex w-full h-40 items-center justify-center'>
            <span className='animate-spin border-2 w-10 h-10 rounded-full border-t-black'></span>
    </div>
  )
}

export default Loader
