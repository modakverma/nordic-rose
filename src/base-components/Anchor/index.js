import React from 'react'
import { twMerge } from 'tailwind-merge'

const Anchor = ({
    href,
  className,
    children
}) => {
  return (
    <a
    target='blank'
        className={twMerge([
              'cursor-pointer font-sans hover:opacity-75 transition border-b-[1.5px]',
              className
        ])}
      href={href}>
      {children}
    </a>
    
  )
}

export default Anchor
