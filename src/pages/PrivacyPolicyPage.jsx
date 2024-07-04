import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Footer from '../components/Footer'

function PrivacyPolicyPage() {
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Navbar/>
        <PrivacyPolicy/>
        <Footer/>
    </>
  )
}

export default PrivacyPolicyPage