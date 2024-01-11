import React from 'react'
import { twMerge } from 'tailwind-merge'

const Loader = ({className}) => {
  return (
    <div className={twMerge(['flex w-20 h-20 items-center justify-center',className])}>
            <span className='animate-spin border-2 w-full h-full rounded-full border-t-black'></span>
    </div>
  )
}

export default Loader
