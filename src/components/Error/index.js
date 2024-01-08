import React from 'react'

const Error = ({error}) => {
  return (
    <div className='font-sans text-2xl flex flex-col gap-2 h-40 w-full items-center justify-center'>
            <h1 className='font-bold'>{error.request.status}</h1>
            <h1>{ error.request.statusText}</h1>
        </div>
  )
}

export default Error
