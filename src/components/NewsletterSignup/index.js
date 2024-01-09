import React, { useState } from 'react'
import Input from '../../base-components/Input'
import Button from '../../base-components/Button'
import axios from 'axios'
import { toast } from 'react-toastify'
import { PROD_URL } from '../../utils/http'
import { isEmailValid } from '../../utils/common'

const NewsletterSignup = () => {
    const [email,setEmail] = useState(null)
    const handleSignup = async (event) => {
        event.preventDefault(); 
        try {
            if (isEmailValid(email)) {
                const subUrl = '/subscribe';
                const response = await axios.post(PROD_URL+subUrl,{
                email
                })
                toast.success(response.data)
            } else {
                toast.warn("Invalid email...")
                return;
            }
        }
        catch (err) {
            toast.error(err.response.data)
        }
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
return (
<div className='border border-t-8 text-center border-black p-5 flex flex-col gap-4 items-center w-1/3'>
        <h1 className='font-bold text-xl'>Sign up for the newsletter</h1>
        <p className='text-sm font-sans font-light'>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>
            <form onSubmit={handleSignup} className='flex'>
            <Input
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email..."
            />
            <Button
            type="submit"
            >sign up</Button>
            </form>
    </div>
)
}

export default NewsletterSignup
