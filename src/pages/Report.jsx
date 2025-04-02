import React from "react";
import { Search, ArrowLeft, ChevronDown, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-blue-50 min-h-screen font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center space-x-4">
          {/* Back Button */}
          <button 
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <h1 className="text-2xl md:text-3xl font-bold text-blue-800">Report History</h1>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 text-blue-400" />
            <input
              type="text"
              placeholder="Search reports..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white border-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 text-blue-800 placeholder-blue-400"
            />
          </div>
          <div className="relative">
            <button className="flex items-center px-4 py-2 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 text-blue-700">
              <Filter className="w-5 h-5 mr-2 text-blue-500" />
              Filter
              <ChevronDown className="w-5 h-5 ml-2 text-blue-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Report History Table */}
      <div className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
        <div className="p-4 border-b border-blue-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-blue-800">Recent Reports</h2>
          <div className="text-sm text-blue-600">
            Showing 5 of 24 reports
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50 text-left">
              <tr>
                <th className="p-4 font-medium text-blue-700">Report ID</th>
                <th className="p-4 font-medium text-blue-700">Subject</th>
                <th className="p-4 font-medium text-blue-700">Status</th>
                <th className="p-4 font-medium text-blue-700">Last Updated</th>
                <th className="p-4 font-medium text-blue-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {[
                { id: "#R1234", subject: "System Crash Report", status: "Open", updated: "2 days ago" },
                { id: "#R1235", subject: "Network Issue", status: "In Progress", updated: "1 day ago" },
                { id: "#R1236", subject: "Security Breach", status: "Resolved", updated: "3 days ago" },
                { id: "#R1237", subject: "Hardware Malfunction", status: "Open", updated: "4 days ago" },
                { id: "#R1238", subject: "Software Update Request", status: "Waiting on Customer", updated: "5 days ago" }
              ].map((row, index) => (
                <tr key={index} className="hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-medium text-blue-900">{row.id}</td>
                  <td className="p-4 text-blue-800">{row.subject}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      row.status === "Open" ? "bg-blue-100 text-blue-700" :
                      row.status === "In Progress" ? "bg-yellow-100 text-yellow-700" :
                      row.status === "Resolved" ? "bg-green-100 text-green-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-blue-600 text-sm">{row.updated}</td>
                  <td className="p-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium underline">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-blue-700">
            Showing 1 to 5 of 24 entries
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-blue-200 rounded hover:bg-blue-100 text-blue-700">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              1
            </button>
            <button className="px-3 py-1 border border-blue-200 rounded hover:bg-blue-100 text-blue-700">
              2
            </button>
            <button className="px-3 py-1 border border-blue-200 rounded hover:bg-blue-100 text-blue-700">
              3
            </button>
            <button className="px-3 py-1 border border-blue-200 rounded hover:bg-blue-100 text-blue-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;