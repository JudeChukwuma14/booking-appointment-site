import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUsPage from './pages/About';
import Contact from './pages/Contact';


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
          <main className="flex-grow">
            <Routes>
              {/* Add your routes here */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App