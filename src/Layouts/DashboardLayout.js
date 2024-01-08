import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
      {children}
      </div>
      <Footer/>
    </div>
  )
}

export default DashboardLayout;
