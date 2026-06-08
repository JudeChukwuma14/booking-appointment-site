import React, { useState } from 'react'
import {
  Users,
  Calendar,
  AlertTriangle,
  Layers,
  TrendingUp,
  Activity,
  Search,
  Filter,
  Download,
  MoreVertical,
  Clipboard,
  CreditCard,
  BarChart3,
  Settings,
  LogOut
} from 'lucide-react'

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState('analytics')
  const [chartPeriod, setChartPeriod] = useState('monthly')

  const timeframes = {
    weekly: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      line: "M 0 80 L 16.6 50 L 33.3 70 L 50 40 L 66.6 60 L 83.3 30 L 100 50",
      area: "M 0 80 L 16.6 50 L 33.3 70 L 50 40 L 66.6 60 L 83.3 30 L 100 50 L 100 100 L 0 100 Z",
      points: [{ x: 0, y: 80 }, { x: 16.6, y: 50 }, { x: 33.3, y: 70 }, { x: 50, y: 40 }, { x: 66.6, y: 60 }, { x: 83.3, y: 30 }, { x: 100, y: 50 }]
    },
    monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      line: "M 0 65 L 16.6 40 L 33.3 55 L 50 25 L 66.6 45 L 83.3 60 L 100 15",
      area: "M 0 65 L 16.6 40 L 33.3 55 L 50 25 L 66.6 45 L 83.3 60 L 100 15 L 100 100 L 0 100 Z",
      points: [{ x: 0, y: 65 }, { x: 16.6, y: 40 }, { x: 33.3, y: 55 }, { x: 50, y: 25 }, { x: 66.6, y: 45 }, { x: 83.3, y: 60 }, { x: 100, y: 15 }]
    }
  }

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen text-slate-800 font-sans antialiased">

      {/* Left Sidebar Layout */}
      <aside className="w-64 bg-white border-r border-slate-200 p-4 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          {/* User Profile Info Tag */}
          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">AA</div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Welcome back,</p>
              <h4 className="text-sm font-bold text-slate-800">Alex Admin</h4>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Patient Portal</p>
            {[
              { id: 'appointments', label: 'Appointments', icon: Calendar },
              { id: 'records', label: 'Records', icon: Clipboard },
              { id: 'billing', label: 'Billing', icon: CreditCard },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 }
            ].map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive
                    ? 'bg-[#00346B] text-white shadow-md shadow-blue-900/20'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                >
                  <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Sidebar Footer Controls */}
        <div className="space-y-1 border-t border-slate-100 pt-4">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
            <Settings size={18} className="text-slate-400" />
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
            <LogOut size={18} className="text-rose-400" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area Container */}
      <main className="flex-1 p-8 space-y-6 overflow-y-auto max-w-7xl">

        {/* Content Action Sub-Header bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">HealthPulse Analytics</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-xs text-slate-500">System Live • Last updated 2 mins ago</p>
            </div>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search data..."
              className="w-full pl-9 pr-4 py-2 border border-slate-200 bg-white rounded-xl text-sm focus:outline-none focus:border-blue-500 shadow-sm"
            />
          </div>
        </div>

        {/* Top Operational Metrics Stat Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Card: Total Patients */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Patients</p>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">1,284</h3>
              <span className="text-[11px] text-emerald-600 bg-emerald-50 font-semibold px-2 py-0.5 rounded-md inline-block">+4.2% from last week</span>
            </div>
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl"><Users size={20} /></div>
          </div>

          {/* Card: Active Appointments */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Active Appointments</p>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">42</h3>
              <p className="text-[11px] text-slate-500">Scheduled for today</p>
            </div>
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl"><Calendar size={20} /></div>
          </div>

          {/* Card: ER Occupancy */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">ER Occupancy</p>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">88%</h3>
              <span className="text-[11px] text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded-md inline-block animate-pulse">High Priority Alert</span>
            </div>
            <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl"><AlertTriangle size={20} /></div>
          </div>

          {/* Card: ICU Occupancy */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">ICU Occupancy</p>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">64%</h3>
              <p className="text-[11px] text-slate-500">12 beds available</p>
            </div>
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl"><Layers size={20} /></div>
          </div>
        </div>

        {/* Graphical Trend & Emergency Alert Row Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Appointment Trends Mock Line Chart Container */}
          <div className="lg:col-span-2 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-blue-500" size={18} />
                <h3 className="font-bold text-slate-900">Appointment Trends</h3>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setChartPeriod('weekly')}
                  className={`px-3 py-1 rounded-md transition-all ${chartPeriod === 'weekly' ? 'bg-[#00346B] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setChartPeriod('monthly')}
                  className={`px-3 py-1 rounded-md transition-all ${chartPeriod === 'monthly' ? 'bg-[#00346B] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Improved Mock Chart Box */}
            <div className="h-56 w-full bg-slate-50 border border-slate-200 rounded-xl flex flex-col relative overflow-hidden">
              {/* Subtle Horizontal Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-slate-200/40" />
                ))}
              </div>

              <div className="flex-1 relative mt-4">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>
                  {/* Area Fill */}
                  <path d={timeframes[chartPeriod].area} fill="url(#chartGradient)" className="transition-all duration-500" />
                  {/* Main Line */}
                  <path d={timeframes[chartPeriod].line} fill="none" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" className="transition-all duration-500" />
                  {/* Interactive Points (Visual Only) */}
                  {timeframes[chartPeriod].points.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r="1.2" fill="white" stroke="#2563EB" strokeWidth="1.2" className="transition-all duration-500" />
                  ))}
                </svg>
              </div>

              {/* X-Axis Month Labels */}
              <div className="flex items-center justify-between px-4 pb-4 z-10">
                {timeframes[chartPeriod].labels.map((label, i) => (
                  <span key={i} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Live Emergency Metrics Widget */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-slate-950">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Activity className="text-emerald-400 animate-pulse" size={18} />
                <h3 className="font-bold text-sm tracking-wide">Live Emergency Routing</h3>
              </div>

              {/* Emergency Routing Feeds Info Units */}
              <div className="space-y-3">
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/50 flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-slate-200">AMB-402</p>
                    <p className="text-[10px] text-slate-400">ETA: 6 mins | Traffic High</p>
                  </div>
                  <span className="text-[9px] font-bold tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md uppercase">En Route</span>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/50 flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-slate-200">AMB-119</p>
                    <p className="text-[10px] text-slate-400">ETA: 2 mins | Arriving</p>
                  </div>
                  <span className="text-[9px] font-bold tracking-wider bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded-md uppercase animate-pulse">Critical</span>
                </div>
              </div>
            </div>

            {/* Current Surge Status Banner Base */}
            <div className="border-t border-slate-800 pt-4 mt-4 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">ER Surge Status</p>
                <p className="text-sm font-extrabold text-rose-500">Level RED</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Wait Time</p>
                <p className="text-sm font-extrabold text-slate-100">45m</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Patient Management Table Sub-System */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="font-bold text-slate-900">Real-time Patient Management</h3>
            <div className="flex gap-2 text-xs font-semibold">
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg shadow-sm">
                <Filter size={14} /> Filter
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg shadow-sm">
                <Download size={14} /> Export CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-5">Patient Name</th>
                  <th className="py-3 px-5">Condition</th>
                  <th className="py-3 px-5">Room</th>
                  <th className="py-3 px-5">Attending</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {[
                  { name: 'Robert Harrison', cond: 'Cardiac Arrest', room: 'ICU-04', doc: 'Dr. Sarah Miller', status: 'Critical', color: 'rose' },
                  { name: 'Alice Thompson', cond: 'Post-Op Recovery', room: '202-B', doc: 'Dr. John Wick', status: 'Stable', color: 'emerald' },
                  { name: 'James Wilson', cond: 'Routine Observation', room: '115-A', doc: 'Dr. Elena K.', status: 'Processing', color: 'blue' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-5 font-bold text-slate-800">{row.name}</td>
                    <td className="py-3.5 px-5">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md inline-block ${row.color === 'rose' ? 'bg-rose-50 text-rose-700' :
                        row.color === 'emerald' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'
                        }`}>
                        {row.cond}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-medium text-slate-500">{row.room}</td>
                    <td className="py-3.5 px-5 text-slate-600 font-medium">{row.doc}</td>
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                        <span className={`w-1.5 h-1.5 rounded-full ${row.color === 'rose' ? 'bg-rose-500' :
                          row.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'
                          }`} />
                        {row.status}
                      </div>
                    </td>
                    <td className="py-3.5 px-5 text-center">
                      <button className="text-slate-400 hover:text-slate-600 p-1"><MoreVertical size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Department Performance Overview */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-12">
          <div>
            <h3 className="font-bold text-slate-900">Department Capacity (Live)</h3>
            <p className="text-xs text-slate-500 mt-1">Resource allocation across major medical units.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-6 border-t border-slate-100">
            {[
              { label: 'Cardiology', value: 75, color: 'blue' },
              { label: 'Neurology', value: 45, color: 'indigo' },
              { label: 'Orthopedics', value: 90, color: 'rose' },
              { label: 'Pediatrics', value: 30, color: 'emerald' },
              { label: 'Oncology', value: 60, color: 'slate' }
            ].map((dept, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{dept.label}</p>
                  <p className="text-xs font-bold text-slate-900">{dept.value}%</p>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${dept.color === 'blue' ? 'bg-blue-600' :
                        dept.color === 'indigo' ? 'bg-indigo-600' :
                          dept.color === 'rose' ? 'bg-rose-600' :
                            dept.color === 'emerald' ? 'bg-emerald-600' : 'bg-slate-600'
                      }`}
                    style={{ width: `${dept.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}

export default DashBoard
