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
  return (
    <div className={twMerge([
        'flex rounded-md shadow overflow-hidden border h-10 font-sans text-nowrap  sm:text-sm font-medium',
        className
    ])}>
        {linkFb ?
            <a
            target='blank'
            href={`https://facebook.com/${linkFb}`}
            className='w-full flex gap-2 justify-center  items-center py-2 px-4 border-x hover:bg-slate-300/20 transition'
        >
                <img className='h-2/3' src={SOCIAL_LINKS.linkFb} alt="facebook" />
            <h1 className='hidden sm:block'>{FbText}</h1>
            </a> : null
        }
        {linkTwt ?
            <a
            target='blank'
            href={`https://twitter.com/${linkTwt}`}
            className='w-full flex gap-2 justify-center  items-center py-2 px-4 border-x hover:bg-slate-300/20 transition'
        >
                <img
                className='h-2/3'
                    src={SOCIAL_LINKS.linkTwt} alt="twitter" />
                <h1 className='hidden sm:block'>{TwtText}</h1>
            </a>
            :null
        }
        {linkWa ?
            <a
            target='blank'
            href={`https://${linkWa}`}
            className='sm:hidden w-full flex gap-2 justify-center  items-center py-2 px-4 border-x hover:bg-slate-300/20 transition'
        >
                <img
                    className='h-2/3'
                    src={SOCIAL_LINKS.linkWa} alt="whatsapp" />
                <h1 className='hidden sm:block'>{WaText}</h1></a>
            :null
        }
    </div>
  )
}

export default SocialLink
