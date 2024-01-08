import React from 'react'
import { twMerge } from 'tailwind-merge';

const Input = ({
  placeholder,
  className
}) => {
  return (
    <input
      placeholder={placeholder}
      className={twMerge(['border px-4 p-2 font-normal w-full border-black text-black font-sans outline-none text-black placeholder-black',
        className
      ])}>
      </input>
  )
}

export default Input
