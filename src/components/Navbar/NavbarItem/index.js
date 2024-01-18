import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const NavbarItem = ({ item,onClick }) => {
    const {pathname} = useLocation();
    return (
        <div
            className={twMerge([
            'rounded-lg lg:rounded-none lg:font-black w-full flex items-center justify-center hover:bg-slate-300/20 lg:hover:bg-primary transition lg:inline-block text-lg uppercase h-full text-sm md:text-base lg:text-xl',
            pathname === item.path && "lg:border-b-2 border-black transition"
        ])} key={item.label} ><Link className='py-4 lg:py-8 w-full h-full flex items-center justify-center font-normal' onClick={onClick} to={item.path}>{item.label}</Link></div>
    )
}

export default NavbarItem;
