import React from 'react'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const DropDown = ({ listItem, className, setStateCallback }) => {
    const navigate = useNavigate();
    // Hide DropDown 
    const handleDropdownHide = () => {
        setStateCallback(false)
    }
    const handleNavigationToSearchItem = (item) => {
        navigate(`/blog/${item.id}`)
        setStateCallback(false)
    }
    return (
      <>
      <div className='relative z-30'>
          <span
              onClick={handleDropdownHide}
              className='p-2 h-8 w-8 hidden lg:flex items-center justify-center rounded-full hover:bg-slate-300/30 cursor-pointer absolute z-10 '>&#x2715;
          </span>
           <ul className={twMerge([
          'pt-10 border border-black font-sans text-sm bg-primary shadow-lg rounde p-2 pl-4 py-5 absolute w-80 h-80 overflow-auto',
          className
    ])}>
        {listItem.map(item => (
            <li
                value={item}
                onClick={()=>handleNavigationToSearchItem(item)}
                key={item.id} className='cursor-pointer rounded-lg h-20 px-4 py-2 hover:bg-slate-300/30 transition border-b border-slate-200/50 flex items-center'>{item.title}
            </li>
      ))}
          </ul>
            </div>
          <div
              onClick={handleDropdownHide}
              className='z-10 cursor-pointer absolute top-0 left-0 right-0 bottom-0'>
          </div>
    </>
  )
}

export default DropDown
