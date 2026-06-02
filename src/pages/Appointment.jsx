import React, { useState } from 'react';

const providers = [
  {
    id: 1,
    name: 'Dr. Paul Babatunde',
    specialty: 'Cardiology',
    location: 'Downtown Medical Center',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  },
  {
    id: 2,
    name: 'Dr. Jude Ckukwuebuka',
    specialty: 'Primary Care',
    location: 'Lagos State University Teaching Hospital, Ikeja',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=120&q=80',
  },
  {
    id: 3,
    name: 'Dr. Victony',
    specialty: 'Pediatrics',
    location: 'Abule Egba General Hospital, Lagos',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=120&q=80',
  },
];

export default function BookingPage() {
  const [selectedProvider, setSelectedProvider] = useState(providers[0]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [patientInfo, setPatientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
  });

  const handleProviderChange = (providerId) => {
    const provider = providers.find((item) => item.id === providerId);
    setSelectedProvider(provider);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="rounded-2xl bg-[#f4f8fa] p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Book an Appointment</h1>
        <p className="mt-2 text-slate-600">
          Select a provider, date, time and location for your appointment.
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <button 
            onClick={() => setCurrentStep(1)}
            className="flex items-center gap-4 text-left transition hover:opacity-80"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold transition ${
              currentStep >= 1 ? 'bg-[#003b8f] text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              1
            </div>
            <div>
              <p className={`text-sm font-semibold ${currentStep === 1 ? 'text-slate-900' : 'text-slate-500'}`}>Choose Provider</p>
              <p className="text-xs text-slate-500">Select the doctor and schedule your visit.</p>
            </div>
          </button>
          <div className="hidden h-px flex-1 bg-slate-200 lg:block"></div>
          <button 
            onClick={() => setCurrentStep(2)}
            className="flex items-center gap-4 text-left transition hover:opacity-80"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold transition ${
              currentStep >= 2 ? 'bg-[#003b8f] text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              2
            </div>
            <p className={`text-sm ${currentStep === 2 ? 'font-semibold text-slate-900' : 'text-slate-500'}`}>Patient Info</p>
          </button>
          <div className="hidden h-px flex-1 bg-slate-200 lg:block"></div>
          <button 
            onClick={() => setCurrentStep(3)}
            className="flex items-center gap-4 text-left transition hover:opacity-80"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold transition ${
              currentStep >= 3 ? 'bg-[#003b8f] text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              3
            </div>
            <p className={`text-sm ${currentStep === 3 ? 'font-semibold text-slate-900' : 'text-slate-500'}`}>Review</p>
          </button>
          <div className="hidden h-px flex-1 bg-slate-200 lg:block"></div>
          <button 
            onClick={() => setCurrentStep(4)}
            className="flex items-center gap-4 text-left transition hover:opacity-80"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold transition ${
              currentStep >= 4 ? 'bg-[#003b8f] text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              4
            </div>
            <p className={`text-sm ${currentStep === 4 ? 'font-semibold text-slate-900' : 'text-slate-500'}`}>Confirm</p>
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.8fr_1fr]">
        <section className="space-y-6 rounded-2xl bg-white p-8 shadow-sm">
          {currentStep === 1 && (
            <>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Choose Provider</h2>
                <p className="mt-1 text-sm text-slate-600">Tap a provider to select the appointment details.</p>
              </div>

              <div className="grid gap-4">
                {providers.map((provider) => (
                  <button
                    key={provider.id}
                    type="button"
                    onClick={() => handleProviderChange(provider.id)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      selectedProvider?.id === provider.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-slate-900">{provider.name}</p>
                          <p className="text-sm text-slate-600">{provider.specialty}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-blue-700 cursor-pointer">Select</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-500">{provider.location}</p>
                  </button>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 cursor-pointer">Date</span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-2 w-full rounded-2xl border cursor-pointer border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 cursor-pointer  ">Time</span>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mt-2 w-full rounded-2xl cursor-pointer border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Patient Information</h2>
                <p className="mt-1 text-sm text-slate-600">Please provide your details to complete the booking.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">First Name</label>
                  <input
                    type="text"
                    placeholder="e.g.Victony"
                    value={patientInfo.firstName}
                    onChange={(e) => setPatientInfo({ ...patientInfo, firstName: e.target.value })}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Anthony"
                    value={patientInfo.lastName}
                    onChange={(e) => setPatientInfo({ ...patientInfo, lastName: e.target.value })}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="Victony@example.com"
                    value={patientInfo.email}
                    onChange={(e) => setPatientInfo({ ...patientInfo, email: e.target.value })}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234"
                    value={patientInfo.phone}
                    onChange={(e) => setPatientInfo({ ...patientInfo, phone: e.target.value })}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">Reason for Visit (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="Briefly describe your symptoms or reason for the appointment..."
                    value={patientInfo.reason}
                    onChange={(e) => setPatientInfo({ ...patientInfo, reason: e.target.value })}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Review Details</h2>
                <p className="mt-2 text-slate-600">Please confirm your appointment information before finishing your booking.</p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 space-y-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <img src={selectedProvider?.image} alt="" className="h-20 w-20 rounded-full object-cover shadow-sm border-2 border-white" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Doctor</p>
                      <p className="text-lg font-bold text-slate-900">{selectedProvider?.name}</p>
                      <p className="text-sm text-slate-600">{selectedProvider?.specialty}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Patient</p>
                    <p className="text-lg font-bold text-slate-900">{patientInfo.firstName} {patientInfo.lastName}</p>
                    <p className="text-sm text-slate-600">{patientInfo.email}</p>
                  </div>
                </div>

                <div className="grid gap-6 border-t border-slate-200 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Date</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {date ? new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Not selected'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Time</p>
                    <p className="mt-1 font-semibold text-slate-900">{time || 'Not selected'}</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</p>
                  <p className="mt-1 font-semibold text-slate-900">{selectedProvider?.location}</p>
                </div>

                {patientInfo.reason && (
                  <div className="border-t border-slate-200 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Reason for Visit</p>
                    <p className="mt-1 text-sm text-slate-700 italic">"{patientInfo.reason}"</p>
                  </div>
                )}
              </div>

              <div className="rounded-xl bg-blue-50 p-4 border border-blue-100 text-sm text-blue-700">
                <strong>Note:</strong> By clicking "Confirm Appointment", you agree to our terms of service and the check-in process at the hospital.
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center py-12">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Appointment Confirmed!</h2>
              <p className="mt-2 text-slate-600">Your visit has been scheduled. Check your email for details.</p>
              <button 
                onClick={() => setCurrentStep(1)}
                className="mt-8 text-[#003b8f] font-semibold hover:underline"
              >
                Schedule another visit
              </button>
            </div>
          )}
        </section>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Booking Summary</h3>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Provider</p>
                <p className="mt-2 font-medium text-slate-900">{selectedProvider?.name}</p>
                <p className="text-slate-500">{selectedProvider?.specialty}</p>
              </div>
              {(patientInfo.firstName || patientInfo.lastName) && (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Patient</p>
                  <p className="mt-2 font-medium text-slate-900">
                    {patientInfo.firstName} {patientInfo.lastName}
                  </p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Location</p>
                <p className="mt-2 font-medium text-slate-900">{selectedProvider?.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Date</p>
                <p className="mt-2 font-medium text-slate-900">{date ? new Date(date).toLocaleDateString() : 'Not selected'}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Time</p>
                <p className="mt-2 font-medium text-slate-900">{time || 'Not selected'}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                if (currentStep < 4) setCurrentStep(currentStep + 1);
              }}
              className="mt-8 w-full rounded-2xl bg-[#003b8f] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#002d6f]"
            >
              {currentStep === 1 ? 'Patient Details' : currentStep === 2 ? 'Review Details' : currentStep === 3 ? 'Confirm Appointment' : 'Done'}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}