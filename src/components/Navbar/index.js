import React,{useEffect, useState} from 'react'
import { NAVBAR_ITEMS } from '../../models/NavbarModel'
import NavbarItem from './NavbarItem';
import Logo from '../Logo';
import Input from '../../base-components/Input'
import hamburgerIcon from '../../assets/hamburger-icon.svg'
import { PROD_URL } from '../../utils/http'
import useSearchData from '../../hooks/useSearchData'
import DropDown from '../../base-components/DropDown';
import Loader from '../Loader';
import searchIconUrl from '../../assets/search.svg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropDown, setSowDropDown] = useState(false);
  const [keyword,setKeyword] = useState('')
  const handleMenuToggle = () => {
    setShowMenu(prev => !prev);
  }
  const subUrl = `/search?keyword=${keyword}`
  const {data,isLoading,isError,refetch} = useSearchData(PROD_URL+subUrl,`search${keyword}`)

  let searchData = data?.data;

  if (isError) {
    searchData = [{
      id:' ',
      title: 'nothing to show...'
    }]
    console.log(isError)
    console.log(isLoading)
  }

  useEffect(() => {
    if (keyword==='') {
      return;
    }
    refetch();
    setSowDropDown(true)
  },[keyword])

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }

  const setStateCallback = (toggle) => {
    console.log(toggle)
    setSowDropDown(toggle)
  }

  return (
    <div className="flex gap-4 w-full items-center justify-between px-4 sm:px-10 border-b h-24">
      <Logo
        className='w-52 sm:w-60 md:w-80'
        dest="navbar" />

      {/*=== SERRCH BAR ===*/}
      <div className=''>
          <div className="relative hidden lg:flex">
          <Input
                className='rounded-xl w-full'
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="Search ..."
          />
          <div className='w-10 h-10 absolute -left-12 -top-0'>
            {isLoading ? <Loader className='w-full h-full'  /> : <img className='w-full h-full' src={searchIconUrl} alt='search-icon' />
            }
          </div>
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
      <div className='z-30 lg:hidden cursor-pointer flex flex-col absolute right-2 top-24 w-full sm:w-1/3 bg-primary items-center shadow-xl rounded-lg p-2 gap-2 bg-white-300/20 font-sans'>
       { NAVBAR_ITEMS.map((item) => (
        <NavbarItem item={item} />)
        )}
      <div className='relative w-full'>
          <div className="flex w-full items-center">
              <Input
                className='rounded-xl w-full'
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="Search ..."
              />
              <div className='w-10 h-10 absolute right-2 top-0'>
            {isLoading ? <Loader className='h-full w-full'  /> : <img className='h-10 w-10' src={searchIconUrl} alt='search-icon' />
            }
          </div>
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