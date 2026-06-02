import React from "react";
import DepImage from "../assets/images/hospital-hallway-perspective.jpg";
import { MdOutlineMonitorHeart, MdScience, MdWarningAmber } from "react-icons/md";

import { ArrowRight, LucideHeartPulse, LucideSmile } from "lucide-react";
import { useState } from "react";

import DrData from "../components/DrData";


const Departments = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState("")
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What should I expect during my first cardiology visit?",
            answer: "During your first visit, we'll conduct a comprehensive health evaluation including your medical history, a physical exam, and possibly an ECG or ultrasound. This helps us understand your cardiovascular health and create a personalized treatment plan."
        },
        {
            id: 2,
            question: "How often should I have my heart checked?",
            answer: "It depends on your age, risk factors, and medical history. Generally, adults should have a baseline check, and those with risk factors or existing conditions should have annual or more frequent evaluations. We'll recommend a schedule tailored to your needs."
        },
        {
            id: 3,
            question: "What are the warning signs of heart disease?",
            answer: "Common warning signs include chest pain or pressure, shortness of breath, unusual fatigue, irregular heartbeat, dizziness, and pain in the neck, jaw, or arm. If you experience any of these, contact us immediately or call 911."
        },
        {
            id: 4,
            question: "Can heart disease be prevented?",
            answer: "While some risk factors like age and family history are unchangeable, many can be managed through lifestyle changes such as regular exercise, healthy eating, stress management, quitting smoking, and maintaining a healthy weight."
        },
        {
            id: 5,
            question: "What payment and insurance options do you accept?",
            answer: "We accept most major insurance plans including Medicare and Medicaid. We also offer flexible payment plans for uninsured patients. Please contact our billing department for specific coverage details and to discuss your options."
        }
    ];






    return (


        <div>

            <section className="flex p-5 sm:p-8 md:p-12 min-h-screen sm:min-h-[60vh] md:min-h-[80vh]" style={{
                width: '100%',
                background: `linear-gradient(to bottom, rgba(0,0,0,0)0% ,rgba(0,0,0,0.8)100%) , url(${DepImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}>


                <section className="flex flex-col justify-center text-white w-full">
                    <h1 className="text-lg sm:text-2xl md:text-4xl text-[#00346B] font-bold font-family-sans mb-5  rounded-sm inline-w-fit px-2 py-1">Department Of Excellence</h1>
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white font-serif">
                        Cardiology Unit
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-lg leading-relaxed">
                        Our mission is to provide world-class cardiovascular care through advanced technology,
                        empathetic patient support, and life-saving medical innovation.
                        <span className="block mt-2 font-semibold text-white">Every heartbeat matters.</span>
                    </p>
                </section>


            </section>

            <div className="px-6 py-12 max-w-7xl mx-auto">



                <h1 className="text-2xl font-serif mb-8">Our Specialized Service</h1>

                {/* MAIN CONTAINER GRID - Responsive Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Services Grid - Left Side (2 columns on desktop, 1 on mobile, 2 on tablet) */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1 - Comprehensive Heart Screening */}
                        <div className="bg-white shadow-[0_3px_8px_rgba(0,0,0,0.24)] p-6 rounded-2xl flex flex-col justify-between min-h-64">
                            <div>
                                <div className="mb-4">
                                    <MdOutlineMonitorHeart size={28} color="#0056B3" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                                    Comprehensive Heart Screening
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Personalized cardiovascular diagnostics, including stress testing
                                    and comprehensive risk evaluation, tailored to your individual
                                    health profile.
                                </p>
                            </div>
                            <button
                                className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Learn More
                                <ArrowRight
                                    size={16}
                                    className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-90" : ""}`}
                                />
                            </button>
                        </div>

                        {/* Card 2 - Advanced ECG */}
                        <div className="bg-white shadow-[0_3px_8px_rgba(0,0,0,0.24)] p-6 rounded-2xl flex flex-col justify-between min-h-64">
                            <div>
                                <div className="mb-4">
                                    <LucideHeartPulse size={28} color="#0056B3" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                                    Advanced ECG
                                </h3>
                                <p className="text-sm text-slate-600">
                                    High-fidelity electrocardiogram record for arrhythmia detection and
                                    monitoring.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 - MRI Scans */}
                        <div className="bg-white shadow-[0_3px_8px_rgba(0,0,0,0.24)] p-6 rounded-2xl flex flex-col justify-between min-h-64">
                            <div>
                                <div className="mb-4">
                                    <MdScience size={28} color="#0056B3" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                                    MRI Scans
                                </h3>
                                <p className="text-sm text-slate-600">
                                    State-of-the-art cardiac MRI providing detailed imagery of heart
                                    structures and function.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 - Pediatric Cardiology */}
                        <div className="bg-[#00346B] text-white shadow-[0_3px_8px_rgba(0,0,0,0.24)] p-6 rounded-2xl flex flex-col justify-center min-h-64">
                            <h3 className="text-lg text-white font-semibold mb-3">Pediatric Cardiology</h3>
                            <p className="text-sm text-blue-100 relative">
                                Specialized heart care  for infants,<br /> children,  and  adolescents with <br />congenital conditions.
                                <div className=" absolute right-5 top-1.5"><LucideSmile size={34} /> </div>
                            </p>

                        </div>
                    </div>

                    {/* Booking Form - Right Side (Full width on mobile, side panel on desktop) */}
                    <div className="bg-white shadow-[0_3px_8px_rgba(0,0,0,0.24)] p-6 rounded-2xl h-fit lg:sticky lg:top-6">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                            Book an Appointment
                        </h2>
                        <p className="text-sm text-slate-600 mb-6">
                            Choose your specialist and preferred time slot for an initial
                            consultation.
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            {/* Select Specialist */}
                            <label className="flex flex-col">
                                <span className="text-sm font-semibold text-slate-700 mb-2">Select Specialist</span>
                                <input
                                    list="names"
                                    name="specialist"
                                    placeholder="Dr. Alice Smith"
                                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <datalist id="names" >
                                    <option value="Dr. Alice Smith" />
                                    <option value="Dr. Bob Johnson" />
                                    <option value="Dr. Carol Lee" />
                                    <option value="Dr. David Kim" />
                                </datalist>
                            </label>

                            {/* Preferred Date */}
                            <label className="flex flex-col">
                                <span className="text-sm font-semibold text-slate-700 mb-2">Preferred Date</span>
                                <input
                                    type="date"
                                    name="date"
                                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            {/* Time Slot */}
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-3">Time Slot</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedTime('09:00')}
                                        className={`rounded-lg py-2 text-sm font-medium transition-colors ${selectedTime === '09:00' ? 'bg-green-500 text-white' : 'border border-slate-200 text-slate-700 hover:border-slate-300'}`}
                                    >
                                        09:00 AM
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedTime('11:30')}
                                        className={`rounded-lg py-2 text-sm font-medium transition-colors ${selectedTime === '11:30' ? 'bg-green-500 text-white' : 'border border-slate-200 text-slate-700 hover:border-slate-300'}`}
                                    >
                                        11:30 AM
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedTime('14:00')}
                                        className={`rounded-lg py-2 text-sm font-medium transition-colors ${selectedTime === '14:00' ? 'bg-green-500 text-white' : 'border border-slate-200 text-slate-700 hover:border-slate-300'}`}
                                    >
                                        02:00 PM
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedTime('16:30')}
                                        className={`rounded-lg py-2 text-sm font-medium transition-colors ${selectedTime === '16:30' ? 'bg-green-500 text-white' : 'border border-slate-200 text-slate-700 hover:border-slate-300'}`}
                                    >
                                        04:30 PM
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="  relative left-18 w-52 mt-4 text-white px-4 py-2.5 rounded-lg bg-[#00346B] hover:bg-[#002349] font-medium transition-colors"
                            >
                                Confirm Reservation
                            </button>

                            <p className="text-xs text-center text-slate-500">
                                Secure booking powered by HealthPulse
                            </p>

                            <hr className="my-4" />

                            {/* Urgent Case Alert */}
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                                <span className="relative  top-3"><MdWarningAmber size={34} color="rgb(158, 4, 4) " /></span>
                                <div>
                                    <p className="text-sm font-semibold text-red-700">Urgent Case?</p>
                                    <p className="text-xs text-red-600 mt-1">
                                        If you are experiencing chest pain, call 911 immediately.
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* MEET OUR SPECIALISTS */}

            <section className="px-6 py-12 max-w-7xl mx-auto">
                <h1>MEET OUR SPECIALISTS</h1>


                {/* <div className="bg-white shadow-[0_3px_8px_rgba(0,0,0,0.8)] mt-3 p-2 rounded-2xl flex flex-col justify-between min-h-64 md:w-70">
                    <div>
                        <div className="mb-4 w-full">
                            <img className="w-full h-52 object-fill" src={DrImg1} alt="" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">
                            Dr. Sarah Mitchell
                        </h3>

                        <h3 className="text-green-500 font-extrabold font-serif text-lg ">
                            ELECTROPHYSIOLOGIST
                        </h3>
                        <h4 className="font-black"> 12+ Year Experience,</h4>
                        <p className="text-sm font-black ">


                            Expert in arrhythmia <br /> ablation and pacemaker <br /> implantation
                        </p> 
                    </div>
                </div> */}

                <div className="DRcard-wrapper">
                    <DrData />
                </div>

            </section>


            <section className="px-6 py-12 max-w-3xl mx-auto ml-8">
                <h1 className="text-2xl font-serif mb-8">Frequently Asked Questions</h1>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="border border-slate-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                                className="w-full flex items-center justify-between p-3 bg-white hover:bg-blue-50 transition-colors duration-200"
                            >
                                <h3 className="text-lg font-semibold text-slate-800 text-left">
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openFAQ === faq.id ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </div>
                            </button>
                            {openFAQ === faq.id && (
                                <div className="px-6 py-4 bg-blue-50 border-t border-slate-200">
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </section>

        </div>



    );
};

export default Departments;
