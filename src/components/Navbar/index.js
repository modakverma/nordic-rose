import React,{useEffect, useState} from 'react'
import { NAVBAR_ITEMS } from '../../models/NavbarModel'
import NavbarItem from './NavbarItem';
import Logo from '../Logo';
import Input from '../../base-components/Input'
import Button from '../../base-components/Button'
import hamburgerIcon from '../../assets/hamburger-icon.svg'
import { PROD_URL } from '../../utils/http'
import useSearchData from '../../hooks/useSearchData'
import Loader from '../Loader';
import Error from '../Error';
import DropDown from '../../base-components/DropDown';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropDown, setSowDropDown] = useState(false);
  const [keyword,setKeyword] = useState('myname')
  const handleMenuToggle = () => {
    setShowMenu(prev => !prev);
  }
  const subUrl = `/search?keyword=${keyword}`
  const {data,isLoading,isError,error,refetch} = useSearchData(PROD_URL+subUrl,'search')

  let searchData = data?.data;
  const handleSearch = () => {
    if (keyword==='') {
      toast.warn('Please enter something to search...')
      return;
    }
    setSowDropDown(true)
    refetch();
  }
  if (isError) {
    searchData = [{
      id:'1',
      title: 'nothing to show...'
    }]
    console.log(isError)
    console.log(isLoading)
  }

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }

  const setStateCallback = (toggle) => {
    console.log(toggle)
    setSowDropDown(toggle)
  }

  return (
    <div className="flex gap-4 w-full items-center justify-between px-4 sm:px-10 border-b h-24 relative">
      <Logo dest="navbar" />

      {/*=== SERRCH BAR ===*/}
      <div className='relative'>
          <div className="hidden lg:flex">
              <Input
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="Enter here..."
              />
          
            <Button
              onClick={handleSearch}
            >{isLoading?'Loading...':'Search'}</Button>
       
            </div>
        {searchData && showDropDown && <DropDown
          className="hidden lg:block"
          listItem={searchData}
          setStateCallback={setStateCallback}
        />}
      </div>

      <div className='hidden lg:flex gap-5'>
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem item={item} />)
        )}
      </div>
        <img
          onClick={handleMenuToggle}
          className="lg:hidden w-14 p-2 cursor-pointer hover:bg-slate-300/20 transition rounded-lg"
        src={hamburgerIcon} alt="hamburger-icon-url" />
      
      {/* === MOBILE VIEW === */}
      {showMenu &&
      <div className='lg:hidden cursor-pointer flex flex-col absolute right-2 top-24 w-full sm:w-1/3 bg-primary items-center shadow-md rounded-lg p-2 gap-2 bg-white-300/20 font-sans '>
       { NAVBAR_ITEMS.map((item) => (
        <NavbarItem item={item} />)
        )}
      <div className='relative'>
          <div className="flex">
              <Input
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="Enter here..."
              />
              <Button
              onClick={handleSearch}
            >{isLoading?'Loading...':'Search'}</Button>
            </div>
            {searchData && showDropDown && <DropDown
              className='right-0'
              listItem={searchData}
              setStateCallback={setStateCallback}
            />}
      </div>
      </div>
      }
    </div>
  )
}

export default Navbar