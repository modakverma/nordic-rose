import React from 'react'

const Button = ({
  children,
  onClick,
  onSubmit
}) => {
  return (
    <button
      onSubmit={onSubmit}
      onClick={onClick}
      className='px-4 p-2 p bg-black text-white font-sans flex-1 whitespace-nowrap uppercase'>{children}</button>
  )
}

export default Button
