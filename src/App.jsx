import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'


import SplashScreen from './components/SplashScreen'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Path } from './../node_modules/@humanfs/core/src/path';
import FindDoctor from './pages/FindDoctor';
import BookingPage from './pages/BookingPage'
import Departments from './pages/Departments';
import AboutUsPage from './pages/About';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds Splash Screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Add ur route here */}
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path='/departments' element={<Departments />} />
              <Route path='/doctors' element={<FindDoctor />} />
              <Route path='/appointment' element={<BookingPage />} />


            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App