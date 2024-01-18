import React,{useState} from 'react'
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
  const [keyword, setKeyword] = useState('')
  const [showSearchInput, setShowSearchInput] = useState(false);
  const handleMenuToggle = () => {
    setSowDropDown(false)
    setShowMenu(prev => !prev);
  }
  const subUrl = `/search?keyword=${keyword}`
  const {data,isLoading,isFetching,isError,refetch} = useSearchData(PROD_URL+subUrl,`search${keyword}`)

  let searchData = data?.data;

  if (isError) {
    searchData = [{
      id:' ',
      title: 'nothing to show...'
    }]
  }

  const handleKeywordChange = (event) => {
    console.log(showDropDown, keyword.length)
    setSowDropDown(true);
    setKeyword(event.target.value);
    if (keyword==='') {
      return;
    }
    refetch();
  }

  const setStateCallback = (toggle) => {
    setSowDropDown(toggle)
  }

  const handleDropdownHide = () => {
    setSowDropDown(false)
  }

  const handleClearSearch = () => {
    setKeyword('')
  }

  return (
    <>
      {showDropDown && keyword.length>0 ?<div
      onClick={handleDropdownHide}
        className='z-90 cursor-pointer absolute top-0 left-0 right-0 bottom-0'>
      </div>
      : null}
    <div className="sticky top-0 z-50 sm:relative bg-primary flex gap-4 w-full items-center justify-between px-2 sm:px-10 border-b h-20 sm:h-32 ">
      <Logo className='w-32 sm:w-64 md:w-96' dest="navbar" />

      {/*=== SERRCH BAR ===*/}
        <div className='flex items-center gap-2 sm:gap-10 h-full'>
        <div className='relative'>
          <div className=" flex items-center jusitfy-center">
          <Input
              className='rounded-2xl border-slate-300 focus:shadow focus:border-slate-400 h-10 flex items-center transition w-full lg:w-80 text-sm sm:text-base'
              value={keyword}
              onChange={handleKeywordChange}
              placeholder="Search ..."
          />   
          {/* LOADER / CROSS / SEARCH ICONS */}
          <div className='w-10 h-10 flex items-center justify-center absolute right-0 top-0'>
            {isLoading || isFetching ? <Loader className='w-6 h-6'/> : keyword.length>0 ?<span
              onClick={handleClearSearch}
              className='h-full w-full flex items-center justify-center rounded-full hover:bg-slate-300/20 cursor-pointer text-xl'>&#x2715;
              </span> : <img className='p-2 w-full h-full' src={searchIconUrl} alt='search-icon' />
            }
            </div>
        </div>
        {searchData && showDropDown && <DropDown
          className="block "
          listItem={searchData}
          setStateCallback={setStateCallback}
        />}
        </div>
      <div className='hidden lg:flex gap-5 h-full'>
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem
            item={item} />)
        )}
      </div>
      
      {/* === MOBILE VIEW === */}
        <img
          onClick={handleMenuToggle}
          className="lg:hidden w-12 sm:w-14 p-2 cursor-pointer hover:bg-slate-300/20 transition rounded-lg"
            src={hamburgerIcon} alt="hamburger-icon-url" />
      </div>
      {showMenu &&
      <div className='border z-30 lg:hidden cursor-pointer flex flex-col absolute right-0 sm:right-2 top-20 sm:top-32 w-1/3 bg-primary items-center shadow-xl rounded-lg p-2 gap-2 bg-white-300/20 font-sans'>
       { NAVBAR_ITEMS.map((item) => (
        <NavbarItem onClick={()=>setShowMenu(false)} item={item} />)
        )}
      </div>
      }
      </div>
      </>
  )
}
export default Navbar