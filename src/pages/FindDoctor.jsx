import React, { useState } from 'react'
import {
  CalendarDays,
  Globe,
  Users,
  Filter,
  Map,
  Star,
  CalendarCheck,
  MapPin,
  ChevronDown,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. James Sterling",
    rating: "4.9",
    role: "Cardiologist",
    available: "Tomorrow, 10:00 AM",
    location: "West Wing, Floor 4",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500",
    gender: "male",
    language: "english",
    timeframe: "3days"
  },
  {
    name: "Dr. Elena Rodriguez",
    rating: "4.8",
    role: "Pediatrician",
    available: "Oct 24, 2:30 PM",
    location: "South Wing, Pediatrics",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500",
    gender: "female",
    language: "spanish",
    timeframe: "week"
  },
  {
    name: "Dr. Marcus Chen",
    rating: "5.0",
    role: "Neurologist",
    available: "Today, 4:15 PM",
    location: "Neurology Annex, Room 202",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500",
    gender: "male",
    language: "mandarin",
    timeframe: "today"
  },
]

const FindDoctor = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("any");
  const [selectedLanguage, setSelectedLanguage] = useState("any");
  const [selectedGender, setSelectedGender] = useState("any");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleApplyFilters = () => {
    let result = doctors;

    if (selectedSpecialty !== "all") {
      result = result.filter(d => d.role.toLowerCase() === selectedSpecialty.toLowerCase());
    }
    if (selectedAvailability !== "any") {
      result = result.filter(d => d.timeframe === selectedAvailability);
    }
    if (selectedLanguage !== "any") {
      result = result.filter(d => d.language === selectedLanguage);
    }
    if (selectedGender !== "any") {
      result = result.filter(d => d.gender === selectedGender);
    }

    setFilteredDoctors(result);
  };

  return (
    <div className='min-h-screen bg-[#F8FAFC] py-12 px-6 md:px-14 font-sans'>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Title & Subtitle Section */}
        <div className="flex flex-col gap-3">
          <h1 className='text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight'>
            Find Your Care Provider
          </h1>
          <p className='text-base md:text-lg text-[#64748B] max-w-3xl leading-relaxed'>
            Connect with world-class specialists who are dedicated to your long-term health and immediate recovery needs.
          </p>
        </div>

        {/* Filter Section */}
        <div className='bg-white border border-[#E2E8F0] rounded-2xl shadow-sm p-6 flex flex-col lg:flex-row items-end gap-5'>
          {/* Specialty */}
          <div className='flex-1 w-full'>
            <label className='block text-sm font-semibold text-[#334155] mb-2'>
              Specialty
            </label>
            <div className="relative">
              <select 
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className='w-full h-12 border border-[#E2E8F0] rounded-xl bg-white pl-4 pr-10 appearance-none text-sm font-medium text-[#334155] shadow-sm focus:outline-none focus:border-[#0B3C7E] hover:border-[#CBD5E1] transition-colors duration-150 cursor-pointer'
              >
                <option value="all">All Specialties</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="pediatrician">Pediatrician</option>
                <option value="neurologist">Neurologist</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
              <div className="absolute right-4 top-3.5 pointer-events-none">
                <ChevronDown className="text-[#94A3B8]" size={18} />
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className='flex-1 w-full'>
            <label className='block text-sm font-semibold text-[#334155] mb-2'>
              Availability
            </label>
            <div className="relative">
              <select 
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className='w-full h-12 border border-[#E2E8F0] rounded-xl bg-white pl-4 pr-10 appearance-none text-sm font-medium text-[#334155] shadow-sm focus:outline-none focus:border-[#0B3C7E] hover:border-[#CBD5E1] transition-colors duration-150 cursor-pointer'
              >
                <option value="any">Any Time</option>
                <option value="today">Today</option>
                <option value="3days">Next 3 Days</option>
                <option value="week">Next Week</option>
              </select>
              <div className="absolute right-4 top-3.5 pointer-events-none">
                <CalendarDays className="text-[#94A3B8]" size={18} />
              </div>
            </div>
          </div>

          {/* Language */}
          <div className='flex-1 w-full'>
            <label className='block text-sm font-semibold text-[#334155] mb-2'>
              Language
            </label>
            <div className="relative">
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className='w-full h-12 border border-[#E2E8F0] rounded-xl bg-white pl-4 pr-10 appearance-none text-sm font-medium text-[#334155] shadow-sm focus:outline-none focus:border-[#0B3C7E] hover:border-[#CBD5E1] transition-colors duration-150 cursor-pointer'
              >
                <option value="any">Any Language</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="mandarin">Mandarin</option>
              </select>
              <div className="absolute right-4 top-3.5 pointer-events-none">
                <Globe className="text-[#94A3B8]" size={18} />
              </div>
            </div>
          </div>

          {/* Gender */}
          <div className='flex-1 w-full'>
            <label className='block text-sm font-semibold text-[#334155] mb-2'>
              Gender
            </label>
            <div className="relative">
              <select 
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className='w-full h-12 border border-[#E2E8F0] rounded-xl bg-white pl-4 pr-10 appearance-none text-sm font-medium text-[#334155] shadow-sm focus:outline-none focus:border-[#0B3C7E] hover:border-[#CBD5E1] transition-colors duration-150 cursor-pointer'
              >
                <option value="any">No Preference</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className="absolute right-4 top-3.5 pointer-events-none">
                <Users className="text-[#94A3B8]" size={18} />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <button 
              onClick={handleApplyFilters}
              className="h-12 px-8 bg-[#0B3C7E] hover:bg-[#082E63] text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 shadow-sm shadow-blue-900/10 flex-1 lg:flex-initial"
            >
              <Filter size={16} />
              <span>Apply</span>
            </button>
            <button className="h-12 w-12 border border-[#E2E8F0] rounded-xl bg-white flex items-center justify-center cursor-pointer transition-all duration-150 hover:bg-[#F8FAFC] shadow-sm">
              <Map className="text-[#0B3C7E]" size={18} />
            </button>
          </div>
        </div>

        {/* Doctor Grid Section */}
        {filteredDoctors.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white border border-[#E2E8F0] rounded-[24px] overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl flex flex-col"
              >
                {/* Image Area */}
                <div className="relative h-72 bg-[#F8FAFC] overflow-hidden cursor-pointer group">
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
                    <Star size={13} fill="currentColor" className="stroke-none" />
                    <span>{doctor.rating}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-[#1E293B] tracking-tight">{doctor.name}</h2>
                    
                    {/* Specialty tag */}
                    <span className="inline-block bg-[#E3F2FD] text-[#1565C0] px-3 py-1 rounded-full text-xs font-bold w-fit">
                      {doctor.role}
                    </span>
                  </div>

                  {/* Info Container with Dividers */}
                  <div className="border-t border-[#F1F5F9] pt-4 flex flex-col gap-3">
                    {/* Next Available */}
                    <p className="flex items-center gap-3 text-[#64748B] text-sm">
                      <CalendarCheck size={18} className="text-[#0B3C7E] flex-shrink-0" />
                      <span>
                        Next available: <span className="text-[#1E293B] font-extrabold">{doctor.available}</span>
                      </span>
                    </p>

                    {/* Location */}
                    <p className="flex items-center gap-3 text-[#64748B] text-sm">
                      <MapPin size={18} className="text-[#0B3C7E] flex-shrink-0" />
                      <span className="font-semibold text-[#475569]">{doctor.location}</span>
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="border-t border-[#F1F5F9] pt-5 grid grid-cols-2 gap-3 mt-auto">
                    <button className="border border-[#0B3C7E] text-[#0B3C7E] hover:bg-blue-50/50 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-colors duration-150">
                      Profile
                    </button>

                    <button className="bg-[#0B3C7E] hover:bg-[#082E63] text-white py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-colors duration-150 shadow-sm shadow-blue-900/5">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-12 text-center shadow-sm">
            <p className="text-lg font-semibold text-[#64748B]">No doctors match your selected filters.</p>
            <button 
              onClick={() => {
                setSelectedSpecialty("all");
                setSelectedAvailability("any");
                setSelectedLanguage("any");
                setSelectedGender("any");
                setFilteredDoctors(doctors);
              }}
              className="mt-4 px-6 py-2.5 bg-[#0B3C7E] hover:bg-[#082E63] text-white font-bold rounded-xl text-sm cursor-pointer transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default FindDoctor
