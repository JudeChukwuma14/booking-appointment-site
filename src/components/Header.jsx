import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaSearch,
    FaBars,
    FaTimes,
    FaAsterisk
} from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            {/* Top Emergency Bar */}
            <div className="bg-[#B91C1C] text-white py-1.5">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold">
                        <FaAsterisk className="w-3.5 h-3.5" />
                        <span>Emergency Services: 911 | 24/7 Ambulance Request</span>
                    </div>
                    <Link to="/call-er" className="border-2 border-white hover:bg-white hover:text-[#B91C1C] transition-colors px-4 py-1 rounded-md text-sm font-bold">
                        Call ER
                    </Link>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 border-b border-gray-100">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl font-black text-[#00346B]">HealthPulse</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link to="/departments" className="text-gray-600 hover:text-primary-500 text-sm font-medium">Departments</Link>
                        <Link to="/doctors" className="text-gray-600 hover:text-primary-500 text-sm font-medium">Find a Doctor</Link>
                        <Link to="/about" className="text-gray-600 hover:text-primary-500 text-sm font-medium">About Us</Link>

                        {/* Search Bar */}
                        <div className="relative ml-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-9 pr-4 py-1.5 bg-[#EEF2F6] border-none rounded-full text-sm w-56 focus:outline-none focus:ring-2 focus:ring-primary-300"
                            />
                            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        </div>

                        {/* Book Appointment Button */}
                        <Link to="appointment" className="bg-[#00346B] text-white px-5 py-2 rounded-md text-sm font-bold hover:bg-[#002247] transition-colors shadow-sm ml-2">
                            Book Appointment
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col space-y-3">
                            <Link to="/departments" className="text-gray-600 py-2 font-medium">Departments</Link>
                            <Link to="/doctors" className="text-gray-600 py-2 font-medium">Find a Doctor</Link>
                            <Link to="/about" className="text-gray-600 py-2 font-medium">About Us</Link>

                            {/* Search Bar Mobile */}
                            <div className="relative my-2">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-9 pr-4 py-2 bg-[#EEF2F6] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300"
                                />
                                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>

                            <Link to="/call-er" className="bg-[#B91C1C] text-white px-4 py-2 rounded-md text-center font-bold">Call ER</Link>
                            <Link to="/book-appointment" className="bg-[#00346B] text-white px-4 py-2 rounded-md text-center font-bold">Book Appointment</Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

