import React from 'react'
import {
  CalendarDays,
  Globe,
  Users,
  Filter,
  Map,
  Star,
  CalendarCheck,
  MapPin,
} from "lucide-react";


const doctors = [
        {
            name: "Dr. James Sterling",
            rating: "4.9",
            role: "Cardiologist",
            available: "Tomorrow, 10:00 AM",
            location: "West Wing, Floor 4",
            img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500"
        },
        {
            name: "Dr. Elena Rodriguez",
            rating: "4.8",
            role:  "Pediatrician",
            available: "Oct 24, 2:30 PM",
            location: "South Wing, Pediatrics",
            img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500",
        },
        {
            name: "Dr. Marcus Chen",
            rating: "5.0",
            role: "Neurologist",
            available: "Today, 4:15 PM",
            location: "Neurology Annex, Room 202",
             img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500",
        },
    ]

const FindDoctor = () => {
    
  return (
    <div className='min-h-screen bg-gray-100 py-10 px-14'>
        <div>
    <h1 className='text-5xl md:text-6xl font-bold text-slate-900 mb-4'>
        Find Your Care Provider
  </h1>
      <p className='text-lg text-slate-600 max-w-3xl leading-8'>
        Connect with world-class specialists who are dedicated to your long-term health and immediate recovery needs.
      </p>
      </div>
      <div className='mt-10 bg-white border rounded-2xl shadow-sm p-5 flex items-end gap-4'>
        <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Specialty
            </label>
            
            <div className='mt-2 h-14 border rounded-xl bg-slate-50 px-4 flex items-center justify-between'>
                <span className='text-lg'>All Specialities</span>
                <span className='text-gray-500 text-2xl'>▼</span>
            </div>
        </div>
        <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Availability</label>
            <div className='mt-2 h-14 border rounded-xl bg-slate-50 px-4 flex items-center justify-between'>
                <span className='text-lg'>Any Time</span>
                <CalendarDays className="text-gray-500" size={22} />
            </div>
        </div>
        <div className='flex-1'>
            <label className="text-sm font-semibold text-slate-700">
            Language
          </label>
          <div className='mt-2 h-14 border rounded-xl bg-slate-50 px-4 flex items-center justify-between'>
             <span className="text-lg">Any Language</span>
             <Globe className="text-gray-500" size={22} />
          </div>
        </div>
        <div className='flex-1'>
            <label className="text-sm font-semibold text-slate-700">
            Gender
          </label>
          <div className="mt-2 h-14 border rounded-xl bg-slate-50 px-4 flex items-center justify-between">
            <span className="text-lg">No Preference</span>
            <Users className="text-gray-500" size={22} />
          </div>
        </div>
        <button className="h-14 px-10 bg-blue-900 rounded-xl text-white font-bold flex items-center gap-3 cursor-pointer transition-colors duration-200 hover:bg-blue-800">
          <Filter size={20} />
          Apply
        </button>
        <button className="h-14 w-14 border rounded-xl bg-white flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-slate-100">
          <Map className="text-blue-900" size={24} />
        </button>
      </div>

        <section className="px-12 py-6 grid grid-cols-3 gap-6">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-72 bg-slate-100 overflow-hidden transition-all duration-300 ease-out hover:scale-105 cursor-pointer">
              <img
                src={doctor.img || doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 right-4 bg-green-300 text-green-900 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                <Star size={16} fill="currentColor" />
                {doctor.rating}
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold">{doctor.name}</h2>

              <span className="inline-block mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                {doctor.role}
              </span>

              <div className="border-t border-gray-300 mt-4 pt-4 space-y-3">
                <p className="flex items-center gap-3 text-gray-700">
                  <CalendarCheck size={18} className="text-blue-800" />
                
                  <b className="text-black">{doctor.available}</b>
                </p>

                <p className="flex items-center gap-3 text-gray-700">
                  <MapPin size={18} className="text-blue-800" />
                  {doctor.location}
                </p>
              </div>

              <div className="border-t border-gray-300 mt-5 pt-5 grid grid-cols-2 gap-3">
                <button className="border border-blue-900 text-blue-900 py-3 rounded-md font-semibold cursor-pointer transition-colors duration-200 hover:bg-blue-50">
                  Profile
                </button>

                <button className="bg-blue-900 text-white py-3 rounded-md font-semibold cursor-pointer transition-colors duration-200 hover:bg-blue-800">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      
    </div>
    
  )
}

export default FindDoctor
