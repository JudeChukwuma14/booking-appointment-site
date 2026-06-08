const Records = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Patient Records</h1>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search by name or ID..."
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Search
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                Export
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Add Record
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Gender
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Age
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Diagnosis
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {/* Sample records */}
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">#001</td>
                  <td className="px-4 py-3 text-sm text-gray-900">John Doe</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Male</td>
                  <td className="px-4 py-3 text-sm text-gray-900">35</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Hypertension
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">2026-01-15</td>
                  <td className="px-4 py-3 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">
                      View
                    </button>
                    <button className="text-green-600 hover:text-green-800 mr-2">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">#002</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Jane Smith</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Female</td>
                  <td className="px-4 py-3 text-sm text-gray-900">28</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Diabetes
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">2026-01-16</td>
                  <td className="px-4 py-3 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">
                      View
                    </button>
                    <button className="text-green-600 hover:text-green-800 mr-2">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
