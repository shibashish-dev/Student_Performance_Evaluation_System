"use client";
import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useGlobalContext } from '@/contexts/GlobalContext';

const RootLayoutWrapper  = ({children}) => {
    const { key } = useGlobalContext(); // Access the key from context
  return (
    <> 
    <Navbar key={key} /> {/* Pass the key prop to Navbar */}
    {children}
    <Footer />
    </>
  )
}

export default RootLayoutWrapper 