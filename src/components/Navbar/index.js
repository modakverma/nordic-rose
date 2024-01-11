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
    setSowDropDown(toggle)
  }

  const handleClearSearch = () => {
    setKeyword('')
  }

  return (
    <div className="flex gap-4 w-full items-center justify-between px-2 sm:px-10 border-b h-24">
      <Logo
        className='w-40 sm:w-64 md:w-80'
        dest="navbar" />

      {/*=== SERRCH BAR ===*/}
      <div className=''>
          <div className="relative flex items-center jusitfy-center">
          <Input
                className='rounded-xl w-full text-xs sm:text-base'
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="Search ..."
          />
          <div className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center absolute right-0 lg:-left-10 top-0'>
            {isLoading ? <Loader className='w-6 h-6'/> : keyword.length>0 ?<span
              onClick={handleClearSearch}
              className='h-full w-full flex items-center justify-center rounded-full hover:bg-slate-300/30 cursor-pointer text-xl'>&#x2715;
          </span>:<img className='p-2 w-full h-full' src={searchIconUrl} alt='search-icon' />
            }
          </div>
          </div>
        {searchData && showDropDown && <DropDown
          className="block "
          listItem={searchData}
          setStateCallback={setStateCallback}
        />}
      </div>

      <div className='hidden lg:flex gap-5'>
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem
            item={item} />)
        )}
      </div>
      
      {/* === MOBILE VIEW === */}
        <img
          onClick={handleMenuToggle}
          className="lg:hidden w-14 p-2 cursor-pointer hover:bg-slate-300/20 transition rounded-lg"
        src={hamburgerIcon} alt="hamburger-icon-url" />
      {showMenu &&
      <div className='border z-30 lg:hidden cursor-pointer flex flex-col absolute right-2 top-24 w-full sm:w-1/3 bg-primary items-center shadow-xl rounded-lg p-2 gap-2 bg-white-300/20 font-sans'>
       { NAVBAR_ITEMS.map((item) => (
        <NavbarItem onClick={()=>setShowMenu(false)} item={item} />)
        )}
      </div>
      }
    </div>
  )
}
export default Navbar