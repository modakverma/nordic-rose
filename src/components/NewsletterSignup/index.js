import React, { useState } from 'react'
import Input from '../../base-components/Input'
import Button from '../../base-components/Button'
import axios from 'axios'
import { toast } from 'react-toastify'
import { PROD_URL } from '../../utils/http'
import { isEmailValid } from '../../utils/common'

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            if (email === '') {
                toast.warn("Please enter an email !");
                return;
            }
            if (isEmailValid(email)) {
                setLoading(true)
                const subUrl = '/subscribe';
                const response = await axios.post(PROD_URL+subUrl,{
                email
                })
                setEmail('');
                setLoading(false);
                toast.success(response.data);
            } else {
                toast.warn("Invalid email...");;
                setLoading(false);
                setEmail('');
                return;
            }
        }
        catch (err) {
            toast.error(err.response.data);
            setLoading(false);
            setEmail('');
        }
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
return (
<div className='border border-t-8 text-center border-black px-10 py-10 flex flex-col gap-4 items-center w-full'>
        <h1 className='font-black text-2xl'>Sign up for the newsletter</h1>
        <p className='text-lg font-sans font-light'>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>
            <form onSubmit={handleSignup} className='flex w-full'>
            <Input
            className='w-full'
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email..."
            />
            <Button
            type="submit"
            >{loading ?'loading...':'sign up'}</Button>
        </form>
    </div>
)
}

export default NewsletterSignup
