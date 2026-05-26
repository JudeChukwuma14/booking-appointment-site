import React from 'react';
import { Link } from 'react-router-dom';
import { FaAward, FaRegIdCard, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#EEF2F6] mt-auto">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1">
                        <div className="mb-4">
                            <h3 className="text-2xl font-black text-[#00346B]">HealthPulse</h3>
                        </div>
                        <p className="text-gray-600 text-sm font-medium leading-relaxed">
                            © {currentYear} HealthPulse Medical Systems.
                            <br />
                            Certified Healthcare Provider.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-bold text-[#00346B] mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-600 hover:text-[#00346B] transition-colors text-sm font-medium"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privacy"
                                    className="text-gray-600 hover:text-[#00346B] transition-colors text-sm font-medium"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/careers"
                                    className="text-gray-600 hover:text-[#00346B] transition-colors text-sm font-medium"
                                >
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-bold text-[#00346B] mb-3">
                            Resources
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/patient-portal"
                                    className="text-gray-600 hover:text-[#00346B] transition-colors text-sm font-medium"
                                >
                                    Patient Portal
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/health-tips"
                                    className="text-gray-600 hover:text-[#00346B] transition-colors text-sm font-medium"
                                >
                                    Health Tips
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/maps"
                                    className="text-gray-600 hover:text-[#00346B] transition-colors text-sm font-medium"
                                >
                                    Maps & Directions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Stay Connected */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-bold text-[#00346B] mb-3">
                            Stay Connected
                        </h4>
                        <div className="flex space-x-3">
                            <Link
                                to="#"
                                className="text-gray-500 hover:text-[#00346B] transition-colors"
                                aria-label="Awards"
                            >
                                <FaAward className="w-5 h-5" />
                            </Link>
                            <Link
                                to="#"
                                className="text-gray-500 hover:text-[#00346B] transition-colors"
                                aria-label="ID Card"
                            >
                                <FaRegIdCard className="w-5 h-5" />
                            </Link>
                            <Link
                                to="#"
                                className="text-gray-500 hover:text-[#00346B] transition-colors"
                                aria-label="Email"
                            >
                                <FaRegEnvelope className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;