import React from 'react'
import { NAVBAR_ITEMS } from '../../models/NavbarModel'
import NavbarItem from './NavbarItem';
import Logo from '../Logo';
import Input from '../../base-components/Input'
import Button from '../../base-components/Button'

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-10 border-b">
      <Logo dest="navbar" />
      <div className='flex hidden md'>
        <Input
          placeholder="Enter here"
        />
        <Button>Search</Button>
      </div>
      <div className='flex gap-5'>
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem item={item} />)
        )}
      </div>
    </div>
  )
}

export default Navbar
