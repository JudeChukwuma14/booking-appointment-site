import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUsPage from "./pages/About";
import Departments from "./pages/Departments";
import FindDoctor from "./pages/FindDoctor";
import BookingPage from "./pages/BookingPage";

import Dashboard from "./pages/dashboard/Dashboard";
// import Appointments from "./pages/dashboard/Appointments";
// import Records from "./pages/dashboard/Records";
// import Billing from "./pages/dashboard/Billing";
// import Analytics from "./pages/dashboard/Analytics";
// import Settings from "./pages/dashboard/Settings";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
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
              {/* Add ur route here */}
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/doctors" element={<FindDoctor />} />
              <Route path="/appointment" element={<BookingPage />} />

              <Route path="/dashboard" element={<Dashboard />} />
{/* <Route path="/dashboard/appointments" element={<Appointments />} /> */}
{/* <Route path="/dashboard/records" element={<Records />} /> */}
{/* <Route path="/dashboard/billing" element={<Billing />} />
<Route path="/dashboard/analytics" element={<Analytics />} /> */}
{/* <Route path="/dashboard/settings" element={<Settings />} /> */}


              
             
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
