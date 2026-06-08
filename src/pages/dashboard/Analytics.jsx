import { useState } from "react";
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

const Analytics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

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
        condition: "Cardiac Arrest",
        room: "ICU-04",
        attending: "Dr. Smith",
        status: "Critical",
        action: <EllipsisVertical className="w-5 h-5 text-gray-500" />,
      },
      {
        id: 2,
        image: img1,
        name: "Jane Smith",
        contact: "555-987-6543",
        condition: "Post-Op Recovery",
        room: "202-B",
        attending: "Dr. Johnson",
        status: "Stable",
        action: <EllipsisVertical className="w-5 h-5 text-gray-500" />,
      },
      {
        id: 3,
        image: img1,
        name: "Robert Brown",
        contact: "555-555-5555",
        condition: "Pneumonia",
        room: "305-C",
        attending: "Dr. Lee",
        status: "Improving",
        action: <EllipsisVertical className="w-5 h-5 text-gray-500" />,
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
                <button className="px-4 py-2 bg-[#EEF2F6] text-primary-700 rounded-lg font-semibold mr-2 mb-2 hover:bg-primary-700 hover:text-white transition-colors duration-200">
                  Weekly
                </button>
                <button className="px-4 py-2 bg-primary-700 text-white rounded-lg font-semibold mr-2 mb-2 hover:bg-[#EEF2F6] hover:text-primary-700 transition-colors duration-200">
                  Monthly
                </button>
              </div>
            </section>
          </div>
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
              <p className="text-sm text-bold text-white bg-green-500 rounded-full px-3 py-1">
                EN ROUTE
              </p>
            </section>
            <p className="text-sm text-white">ETA: 6 minutes (High Traffic)</p>
          </div>
          <div className="flex flex-col gap-2 w-full px-4 py-3 bg-gray-700 rounded-lg">
            <section className="flex items-center justify-between gap-2">
              <p className="text-sm text-white">AMB-402</p>
              <p className="text-sm text-bold text-white bg-red-500 rounded-full px-3 py-1">
                CRITICAL
              </p>
            </section>
            <p className="text-sm text-white">ETA: 6 minutes (High Traffic)</p>
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
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
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
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
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
                  <h3 className="text-lg font-semibold text-gray-800">
                    Patient Details
                  </h3>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                      src={selectedPatient.image}
                      alt={selectedPatient.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
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
                  <div className="flex flex-col items-center justify-center gap-2 bg-blue-200 py-3 px-2 rounded-lg">
                    <p className="text-gray-700 text-sm font-medium">
                      Heart Rate
                    </p>
                    <p className="text-primary-700 font-bold text-lg">88 bpm</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 bg-green-200 py-3 px-2 rounded-lg">
                    <p className="text-gray-700 text-sm font-medium">Temp</p>
                    <p className="text-primary-700 font-bold text-lg">98.6°F</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 bg-red-200 py-3 px-2 rounded-lg">
                    <p className="text-gray-700 text-sm font-medium">BP</p>
                    <p className="text-primary-700 font-bold text-lg">120/80</p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4 mt-6 -mx-6 bg-blue-200 px-6 py-4 rounded-b-lg">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-red-700 hover:bg-red-800 rounded-lg py-2 px-4 transition-colors duration-200"
                    onClick={() =>
                      console.log(
                        `Triggering emergency alert for ${selectedPatient.name}`,
                      )
                    }
                  >
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
        <div className="grid w-full grid-cols-5 gap-4 mt-4">
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
