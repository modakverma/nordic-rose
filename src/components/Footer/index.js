import React from 'react'
import Logo from '../Logo'
import Marquee from './Marquee'
import { FOOTER_MODEL } from '../../models/FooterModel'

const Footer = () => {
  const {companyDetails,social } = FOOTER_MODEL;
  return (
    <div className='overflow-hidden w-full bg-footer min-h-10 flex flex-col gap-12 text-white items-center py-4'>
      <Marquee/>
      <div className='pt-10 w-96 text-center flex flex-col items-center gap-8'>
      <Logo dest="footer"/>
        <p>{companyDetails}</p>
        <div className='w-full flex gap-4 justify-center'>
          {social.map(media => (
            <a target='blank' className='font-sans border-b' href={media.href}>{ media.label}</a>
          ))}
        </div>
      </div>
      <span className='text-center font-sans text-sm pb-5'>
        <h1>&#169; 2012-2020 Nordic Rose Co.</h1>
        All rights reserved
      </span>
    </div>
  )
}

export default Footer
