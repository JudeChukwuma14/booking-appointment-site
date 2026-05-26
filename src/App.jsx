import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import FindDoctor from './pages/FindDoctor';
import Home from './pages/Home';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2.5 seconds Splash Screen

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
          <main className="flex-">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/find-doctor" element={<FindDoctor />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
