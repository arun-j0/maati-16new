import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Faqs from '../components/Faqs';

function FaqsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Faqs />
    </>
  );
}

export default FaqsPage;
