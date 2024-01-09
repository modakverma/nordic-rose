import React,{useState} from 'react'
import { NAVBAR_ITEMS } from '../../models/NavbarModel'
import NavbarItem from './NavbarItem';
import Logo from '../Logo';
import Input from '../../base-components/Input'
import Button from '../../base-components/Button'
import hamburgerIcon from '../../assets/hamburger-icon.svg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenuToggle = () => {
    setShowMenu(prev => !prev);
  }
  const handleSearch = () => {
    
  }
  return (
    <div className="flex gap-4 w-full items-center justify-between px-4 sm:px-10 border-b h-24 relative">
      <Logo dest="navbar" />

      {/*=== SERRCH BAR ===*/}
      <div className='hidden lg:flex'>
        <Input
          onChange={handleSearch}
          placeholder="Enter here..."
        />
        <Button>Search</Button>
      </div>

      <div className='hidden lg:flex gap-5'>
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem item={item} />)
        )}
      </div>
        <img
          onClick={handleMenuToggle}
          className="lg:hidden w-14 p-2  cursor-pointer hover:bg-slate-300/20 transition rounded-lg"
          src={hamburgerIcon} alt="hamburger-icon-url" />
      {showMenu &&
      <div className='lg:hidden cursor-pointer flex flex-col absolute right-2 top-24 w-full sm:w-1/3 bg-primary items-center shadow-md rounded-lg p-2 gap-2 bg-white-300/20 font-sans '>
       { NAVBAR_ITEMS.map((item) => (
        <NavbarItem item={item} />)
        )}
      <div className="flex">
          <Input placeholder="Enter here..." />
          <Button>Search</Button>
      </div>
      </div>
      }
    </div>
  )
}

export default Navbar
