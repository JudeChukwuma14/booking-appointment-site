import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'


import SplashScreen from './components/SplashScreen'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'

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




              <Route path="/contact" element={<Contact />} />
             
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App