import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const NavbarItem = ({ item }) => {
    const {pathname} = useLocation();
    return (
        <div className={twMerge([
            'font-black inline-block py-8 text-lg uppercase h-full',
            pathname === item.path && "border-b-2 border-black transition"
        ])} key={item.label} ><Link to={item.path}>{item.label}</Link></div>
    )
}

export default NavbarItem;
