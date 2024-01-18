import React from 'react'
import { twMerge } from 'tailwind-merge'
import { SOCIAL_LINKS } from '../../models/LinksModel'

const SocialLink = ({
    className,
    linkFb,
    linkTwt,
    linkWa,
    FbText,
    TwtText,
    WaText,
}) => {
    if (!linkWa && !linkFb && !linkTwt ) {
        return null;
    }
  return (
    <div className={twMerge([
        'flex rounded-md shadow-slate-200/40 overflow-hidden border h-14 font-sans text-nowrap sm:text-sm font-medium',
        className
    ])}>
        {linkFb ?
            <a
            target='blank'
            href={`https://facebook.com/${linkFb}`}
            className='w-full flex gap-4 justify-center  items-center py-2 px-4 border-x hover:bg-slate-300/20 transition'
        >
                <img className='h-3/5 sm:h-1/2' src={SOCIAL_LINKS.linkFb} alt="facebook" />
            <h1 className='hidden sm:block'>{FbText}</h1>
            </a> : null
        }
        {linkTwt ?
            <a
            target='blank'
            href={`https://twitter.com/${linkTwt}`}
            className='w-full flex gap-4 justify-center  items-center py-2 px-4 border-x hover:bg-slate-300/20 transition'
        >
                <img
                className='h-3/5 sm:h-1/2'
                    src={SOCIAL_LINKS.linkTwt} alt="twitter" />
                <h1 className='hidden sm:block'>{TwtText}</h1>
            </a>
            :null
        }
        {linkWa &&
            <a
            target='blank'
            href={`https://wa.me/91${linkWa}`}
            className='sm:hidden w-full flex gap-4 justify-center  items-center py-2 px-4 border-x hover:bg-slate-300/20 transition'
        >
                <img
                    className='h-3/5 sm:h-1/2'
                    src={SOCIAL_LINKS.linkWa} alt="whatsapp" />
                <h1 className='hidden sm:block'>{WaText}</h1></a>
            
        }
    </div>
  )
}

export default SocialLink
