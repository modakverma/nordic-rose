import React from 'react'
import Input from '../../base-components/Input'
import Button from '../../base-components/Button'

const NewsletterSignup = () => {
  return (
    <div className='border border-t-4 border-black p-5 flex flex-col gap-4 items-center'>
          <h1 className='font-bold text-xl'>Sign up for the newsletter</h1>
          <p className='text-sm font-sans font-light'>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>
          <div>
              <Input />
              <Button></Button>
          </div>
    </div>
  )
}

export default NewsletterSignup
