import React from 'react'
import { twMerge } from 'tailwind-merge'

const Loader = ({className}) => {
  return (
    <div className={twMerge(['flex w-full h-40 items-center justify-center',className])}>
            <span className='animate-spin border-2 w-10 h-10 rounded-full border-t-black'></span>
    </div>
  )
}

export default Loader
