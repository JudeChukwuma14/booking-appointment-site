import { useState, useEffect } from "react";
import {
  TrendingUp,
  Users,
  CalendarCheck,
  OctagonAlert,
  BedDouble,
  Ambulance,
  ListFilter,
  Download,
  EllipsisVertical,
} from "lucide-react";
import img1 from "../../assets/images/img1.jpg";
import { MdEmergency } from "react-icons/md";

const AppointmentTrendChart = ({ range }) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  useEffect(() => {
    setHoveredPoint(null);
  }, [range]);

  const weeklyData = [
    { month: "Monday", value: 65 },
    { month: "Tuesday", value: 120 },
    { month: "Wednesday", value: 165 },
    { month: "Thursday", value: 245 },
    { month: "Friday", value: 310 },
    { month: "Saturday", value: 385 },
    { month: "Sunday", value: 460 }
  ];

  const monthlyData = [
    { month: "January", value: 210 },
    { month: "February", value: 1020 },
    { month: "March", value: 380 },
    { month: "April", value: 980 },
    { month: "May", value: 590 },
    { month: "June", value: 720 },
    { month: "July", value: 910 }
  ];

  const chartData = range === "weekly" ? weeklyData : monthlyData;

  const width = 600;
  const height = 220;
  const paddingX = 45;
  const paddingY = 30;
  const chartWidth = width - 2 * paddingX;
  const chartHeight = height - 2 * paddingY - 10;
  const maxValue = range === "weekly" ? 500 : 1000;

  const pts = chartData.map((data, idx) => {
    const x = paddingX + idx * (chartWidth / (chartData.length - 1));
    const y = (height - paddingY - 10) - (data.value / maxValue) * chartHeight;
    return { x, y };
  });

  const getBezierPath = (points) => {
    if (points.length === 0) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cp1x = p0.x + (p1.x - p0.x) / 2;
      const cp1y = p0.y;
      const cp2x = p1.x - (p1.x - p0.x) / 2;
      const cp2y = p1.y;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
    }
    return d;
  };

  const linePath = getBezierPath(pts);
  const baselineY = height - paddingY - 10;
  const areaPath = `${linePath} L ${pts[pts.length - 1].x} ${baselineY} L ${pts[0].x} ${baselineY} Z`;

  const yGridValues = range === "weekly"
    ? [0, 100, 200, 300, 400, 500]
    : [0, 200, 400, 600, 800, 1000];

  return (
    <div className="w-full bg-slate-50/30 rounded-xl p-4 border border-slate-100/50 mt-2">
      <div className="relative w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          <defs>
            <filter id="chart-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.12" />
            </filter>
            
            <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>

            <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          {yGridValues.map((val, idx) => {
            const y = baselineY - (val / maxValue) * chartHeight;
            return (
              <g key={idx}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="#E2E8F0"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
                <text
                  x={paddingX - 10}
                  y={y + 4}
                  textAnchor="end"
                  fill="#94A3B8"
                  fontSize={10}
                  fontWeight="600"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Area under curve */}
          <path d={areaPath} fill="url(#area-grad)" />

          {/* Flow line */}
          <path
            d={linePath}
            fill="none"
            stroke="url(#line-grad)"
            strokeWidth={3}
            strokeLinecap="round"
          />

          {/* X Axis labels */}
          {chartData.map((data, idx) => (
            <text
              key={idx}
              x={pts[idx].x}
              y={height - 10}
              textAnchor="middle"
              fill="#64748B"
              fontSize={11}
              fontWeight="600"
            >
              {data.month}
            </text>
          ))}

          {/* Vertical tracking line on hover */}
          {hoveredPoint !== null && (
            <line
              x1={pts[hoveredPoint].x}
              y1={baselineY - chartHeight}
              x2={pts[hoveredPoint].x}
              y2={baselineY}
              stroke="#94A3B8"
              strokeWidth={1.5}
              strokeDasharray="3 3"
            />
          )}

          {/* Interactive dots */}
          {pts.map((pt, idx) => {
            const isHovered = hoveredPoint === idx;
            return (
              <g key={idx}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 10 : 0}
                  fill="#3B82F6"
                  opacity={0.15}
                  className="transition-all duration-300 ease-out"
                />
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 6.5 : 4}
                  fill={isHovered ? "#3B82F6" : "#FFFFFF"}
                  stroke={isHovered ? "#FFFFFF" : "#3B82F6"}
                  strokeWidth={2}
                  className="transition-all duration-200 cursor-pointer"
                />
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={25}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(idx)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              </g>
            );
          })}

          {/* Tooltip */}
          {hoveredPoint !== null && (
            <g
              transform={`translate(${pts[hoveredPoint].x}, ${pts[hoveredPoint].y - 38})`}
              filter="url(#chart-shadow)"
              className="pointer-events-none"
            >
              <rect
                x={-60}
                y={-22}
                width={120}
                height={40}
                rx={6}
                fill="#1E293B"
              />
              <text
                x={0}
                y={-8}
                textAnchor="middle"
                fill="#94A3B8"
                fontSize={9}
                fontWeight="700"
                textTransform="uppercase"
              >
                {chartData[hoveredPoint].month}
              </text>
              <text
                x={0}
                y={9}
                textAnchor="middle"
                fill="#38BDF8"
                fontSize={12}
                fontWeight="800"
              >
                {chartData[hoveredPoint].value} Appts
              </text>
              <polygon
                points="-4,18 4,18 0,22"
                fill="#1E293B"
              />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

const Analytics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [trendRange, setTrendRange] = useState("monthly");

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      width: "90%",
    },
  };

  function userTableData() {
    const patients = [
      {
        id: 1,
        image: img1,
        name: "John Doe",
        contact: "555-123-4567",
        condition:<p className="w-fit bg-red-200 px-3 py-1 rounded-full text-red-800 text-start font-bold">Cardiac Arrest</p>,
        room: "ICU-04",
        attending: "Dr. Smith",
        status: "Critical",
        action: <EllipsisVertical className="w-5 h-5 text-gray-500" />,
        lastUpdated: "#HP-9920-RH",
      },
      {
        id: 2,
        image: img1,
        name: "Jane Smith",
        contact: "555-987-6543",
        condition:<p className="w-fit bg-green-200 px-3 py-1 rounded-full text-green-800 text-start font-bold">Post-Op Recovery</p>,
        room: "202-B",
        attending: "Dr. Johnson",
        status: "Stable",
        action: <EllipsisVertical className="w-5 h-5 text-gray-500" />,
        lastUpdated: "#HP-2142-LM",
      },
      {
        id: 3,
        image: img1,
        name: "Robert Brown",
        contact: "555-555-5555",
        condition:<p className="w-fit bg-gray-200 px-3 py-1 rounded-full text-gray-800 text-start font-bold">Pneumonia</p>,
        room: "305-C",
        attending: "Dr. Lee",
        status: "Improving",
        action: <EllipsisVertical className="w-5 h-5 text-gray-500" />,
        lastUpdated: "#MP-8832-WS",
      },
    ];

    const filteredPatients = patients.filter((patient) => {
      const matchesSearch = patient.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus = statusFilter
        ? patient.status === statusFilter
        : true;
      return matchesSearch && matchesStatus;
    });

    return filteredPatients;
  }

  return (
    <div className="w-full bg-[#EEF2F6] py-8">
      <div className="mx-auto grid w-full max-w-full gap-5 px-4 md:grid-cols-2 xl:grid-cols-4">
        <div
          className="relative flex h-full min-h-[180px] flex-col justify-between rounded-xl bg-white p-5 shadow-lg"
          style={{ boxShadow: "8px 0 24px -16px rgba(59,130,246,0.45)" }}
        >
          <div className="flex items-center gap-6">
            <section>
              <h3 className="text-xl font-light text-primary-700">
                TOTAL PATIENTS
              </h3>
              <p className="text-4xl font-bold text-gray-800">1,284</p>
            </section>
            <Users className="text-primary-700 w-10 h-10 rounded-lg bg-primary-100 p-2" />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <TrendingUp className="text-green-500" />
            <p className="text-sm text-green-500">+4.2% from last week</p>
          </div>
        </div>

        <div
          className="relative flex h-full min-h-[180px] flex-col justify-between rounded-xl bg-white p-5 shadow-lg"
          style={{ boxShadow: "8px 0 24px -16px rgba(16,185,129,0.45)" }}
        >
          <div className="flex items-center gap-6">
            <section>
              <h3 className="text-xl font-light text-primary-700">
                ACTIVE APPOINTMENTS
              </h3>
              <p className="text-4xl font-bold text-gray-800">42</p>
            </section>
            <CalendarCheck className="text-green-900 w-10 h-10 rounded-lg bg-green-300 p-2" />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-sm text-gray-500">Scheduled for today</p>
          </div>
        </div>

        <div
          className="relative flex h-full min-h-[180px] flex-col justify-between rounded-xl bg-white p-5 shadow-lg"
          style={{ boxShadow: "8px 0 24px -16px rgba(185,28,28,0.35)" }}
        >
          <div className="flex items-center gap-6">
            <section>
              <h3 className="text-xl font-light text-primary-700">
                ER OCCUPANCY
              </h3>
              <p className="text-4xl font-bold text-gray-800">88%</p>
            </section>
            <OctagonAlert className="text-red-900 w-10 h-10 rounded-lg bg-red-200 p-2" />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-sm font-semibold text-red-900">
              High Priority Alert
            </p>
          </div>
        </div>

        <div
          className="relative flex h-full min-h-[180px] flex-col justify-between rounded-xl bg-white p-5 shadow-lg"
          style={{ boxShadow: "8px 0 24px -16px rgba(30,64,175,0.35)" }}
        >
          <div className="flex items-center gap-6">
            <section>
              <h3 className="text-xl font-light text-primary-700">
                ICU OCCUPANCY
              </h3>
              <p className="text-4xl font-bold text-gray-800">64%</p>
            </section>
            <BedDouble className="text-blue-900 w-10 h-10 rounded-lg bg-blue-200 p-2" />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-sm text-gray-500">12 Beds Available</p>
          </div>
        </div>
      </div>

      {/* Additional Analytics Sections */}
      <div className="flex mx-auto mt-8 w-full max-w-full gap-5 px-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="mx-auto mt-8 w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
          <div>
            <section className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">
                Appointment Trends
              </h2>
              <div>
                <button
                  onClick={() => setTrendRange("weekly")}
                  className={`px-4 py-2 rounded-lg font-semibold mr-2 mb-2 transition-colors duration-200 cursor-pointer ${
                    trendRange === "weekly"
                      ? "bg-primary-700 text-white"
                      : "bg-[#EEF2F6] text-primary-700 hover:bg-primary-700 hover:text-white"
                  }`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setTrendRange("monthly")}
                  className={`px-4 py-2 rounded-lg font-semibold mr-2 mb-2 transition-colors duration-200 cursor-pointer ${
                    trendRange === "monthly"
                      ? "bg-primary-700 text-white"
                      : "bg-[#EEF2F6] text-primary-700 hover:bg-primary-700 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
              </div>
            </section>
          </div>
          <AppointmentTrendChart range={trendRange} />
        </div>
        <div className="flex flex-col mx-auto w-full max-w-xl items-center gap-4 bg-primary-900 text-white rounded-lg p-4 shadow-lg mt-8">
          <div className="flex items-center justify-start gap-2 p-4 w-full">
            <Ambulance className="text-green-400 w-12 h-12 rounded-lg p-3" />
            <h2 className="text-lg font-semibold text-white mb-2">
              Live Emergency
            </h2>
          </div>
          <div className="flex flex-col gap-2 w-full px-4 py-3 bg-gray-700 rounded-lg">
            <section className="flex items-center justify-between gap-2">
              <p className="text-sm text-white">AMB-402</p>
              <p className="text-sm font-bold text-white bg-green-500 rounded-full px-3 py-1">
                EN ROUTE
              </p>
            </section>
            <p className="text-sm text-white">ETA: 6 minutes (High Traffic)</p>
            <div className="w-full h-2 rounded-lg bg-gray-400">
              <div className="w-3/4 h-full rounded-lg bg-green-500"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full px-4 py-3 bg-gray-700 rounded-lg">
            <section className="flex items-center justify-between gap-2">
              <p className="text-sm text-white">AMB-402</p>
              <p className="text-sm font-bold text-white bg-red-500 rounded-full px-3 py-1">
                CRITICAL
              </p>
            </section>
            <p className="text-sm text-white">ETA: 6 minutes (High Traffic)</p>
            <div className="w-full h-2 rounded-lg bg-gray-400">
              <div className="w-8/9 h-full rounded-lg bg-red-500"></div>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-2 w-full px-4 py-2">
            <h1 className="text-lg font-semibold text-gray-300 mt-4 text-start">
              ER SURGE STATUS
            </h1>
            <div className="flex items-center justify-start gap-4 w-full">
              <div className="bg-gray-700 rounded-lg p-3 mt-2 w-full m-w-1/2">
                <p className="text-sm text-center text-gray-300">Level</p>
                <h2 className="text-2xl text-center font-bold text-red-500">
                  RED
                </h2>
              </div>
              <div className="bg-gray-700 rounded-lg p-3 mt-2 w-full m-w-1/2">
                <p className="text-sm text-center text-gray-300">Wait Time</p>
                <h2 className="text-2xl text-center font-bold text-white">
                  45m
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real time patient management */}
      <div className="flex flex-col mx-auto mt-8 w-full max-w-full px-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex items-center justify-between w-full bg-white rounded-lg p-6 shadow-lg">
          <h3>Real-time Patient Management</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex px-3 py-1 gap-2 text-white rounded-lg text-sm font-semibold transition-colors duration-200"
              >
                <ListFilter className="text-primary-700 w-6 h-6" />
                <p>Filter</p>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Download className="text-primary-700 w-6 h-6" />
              <p>Export CSV</p>
            </div>
          </div>
        </div>

        {/* FILTER MODAL */}
        {isFilterOpen && (
          <div style={styles.overlay}>
            <div style={styles.modal}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Filter Details
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setStatusFilter("");
                    setIsFilterOpen(false);
                  }}
                >
                  Close
                </button>
              </div>

              <input
                placeholder="Search name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="Critical">Critical</option>
                <option value="Stable">Stable</option>
                <option value="Improving">Improving</option>
              </select>

              <div style={{ marginTop: "20px" }}>
                <button onClick={() => setIsFilterOpen(false)}>Apply</button>

                <button
                  onClick={() => {
                    setStatusFilter("");
                    setIsFilterOpen(false);
                  }}
                  style={{ marginLeft: "10px" }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="w-full overflow-x-auto bg-white rounded-lg p-4 shadow-lg">
          <table className="min-w-full table-auto border-separate border-spacing-0">
            <thead className="bg-primary-200">
              <tr>
                <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200">
                  Patient Name
                </th>
                <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200">
                  Condition
                </th>
                <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200">
                  Room
                </th>
                <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200">
                  Attending Physician
                </th>
                <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
              {userTableData().map((patient) => (
                <tr
                  key={patient.id}
                  className="odd:bg-white even:bg-slate-50 hover:bg-slate-100 transition-colors duration-150"
                >
                  <td className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    <img src={patient.image} alt="" className="w-10 h-10 rounded-full object-cover" />
                    {patient.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {patient.condition}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {patient.room}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {patient.attending}
                  </td>
                  <td className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    <span className={`w-2 h-2 rounded-full ${
                      patient.status === "Critical" ? "bg-red-600" :
                      patient.status === "Stable" ? "bg-green-600" :
                      "bg-gray-600"
                    }`}></span>
                    {patient.status}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    <button
                      onClick={() => {
                        setSelectedPatient(patient);
                        setIsModalOpen(true);
                      }}
                      className=" text-white py-1 px-3 rounded-md cursor-pointer"
                    >
                      {patient.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModalOpen && selectedPatient && (
            <div
              className="fixed inset-0 bg-gray-100/20 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="bg-white rounded-lg overflow-hidden w-full max-w-md pt-6 px-6 pb-0"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                    Patient Details
                  </h3>
                  <p className="text-sm text-gray-500">ID: {selectedPatient.lastUpdated}</p>
                  </div>
                  
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setIsModalOpen(false)}
                  >
                    X
                  </button>
                </div>
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                      src={selectedPatient.image}
                      alt={selectedPatient.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold">
                      {selectedPatient.name}
                    </p>
                    <p className="text-gray-600">
                      Contact: {selectedPatient.contact}
                    </p>
                    <p className="text-gray-600">
                      Email:{" "}
                      {selectedPatient.name.toLowerCase().replace(" ", ".")}
                      @example.com
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 font-semibold">RECENT VITALS</p>
                <div className="grid grid-cols-3 gap-3 mt-3 w-full">
                  <div className="flex flex-col items-center justify-center gap-2 bg-blue-100 py-3 px-2 rounded-lg">
                    <p className="text-gray-700 text-sm font-medium">
                      Heart Rate
                    </p>
                    <p className="text-primary-700 font-bold text-lg">88 bpm</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 bg-blue-100 py-3 px-2 rounded-lg">
                    <p className="text-gray-700 text-sm font-medium">Temp</p>
                    <p className="text-primary-700 font-bold text-lg">98.6°F</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 bg-blue-100 py-3 px-2 rounded-lg">
                    <p className="text-gray-700 text-sm font-medium">BP</p>
                    <p className="text-primary-700 font-bold text-lg">120/80</p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4 mt-6 -mx-6 bg-blue-100 px-6 py-4 rounded-b-lg">
                  <button
                    className="text-gray-500 hover:text-gray-700 font-bold"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="flex items-center gap-1 font-semibold text-white bg-red-700 hover:bg-red-800 rounded-lg py-2 px-4 transition-colors duration-200"
                    onClick={() =>
                      console.log(
                        `Triggering emergency alert for ${selectedPatient.name}`,
                      )
                    }
                    
                  >
                    <MdEmergency />
                    Emergency Alert
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Department Performance (Monthly) */}
      <div className="flex flex-col items-start w-full bg-white rounded-lg p-6 shadow-lg mt-8">
        <h3 className="text-2xl font-semibold text-left text-gray-800">
          Department Performance (Monthly)
        </h3>
        <div className="grid w-full grid-cols-5 gap-4 mt-40">
          <p className="flex items-center justify-center rounded-lg bg-slate-100 py-3 text-center text-sm font-medium text-gray-700">
            Cardiology
          </p>
          <p className="flex items-center justify-center rounded-lg bg-slate-100 py-3 text-center text-sm font-medium text-gray-700">
            Neurology
          </p>
          <p className="flex items-center justify-center rounded-lg bg-slate-100 py-3 text-center text-sm font-medium text-gray-700">
            Orthopedics
          </p>
          <p className="flex items-center justify-center rounded-lg bg-slate-100 py-3 text-center text-sm font-medium text-gray-700">
            Pediatrics
          </p>
          <p className="flex items-center justify-center rounded-lg bg-slate-100 py-3 text-center text-sm font-medium text-gray-700">
            Oncology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
