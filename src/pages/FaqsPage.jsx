import React from 'react'
import Navbar from '../components/Navbar'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import { useEffect } from 'react'

function FaqsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Navbar/>
        <Faqs/>
        <Footer/>
    </>
  )
}

export default FaqsPage