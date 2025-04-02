import React from "react";
import { Search, ArrowLeft, User as UserIcon, ChevronDown, Filter, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  // Sample user data with Unknown names
  const users = [
    { 
      id: "#U1001", 
      name: "Unknown", 
      email: "unknown1@example.com",
      role: "User", 
      lastActive: "5 minutes ago",
      status: "active"
    },
    { 
      id: "#U1002", 
      name: "Unknown", 
      email: "unknown2@example.com",
      role: "User", 
      lastActive: "2 hours ago",
      status: "active"
    },
    { 
      id: "#U1003", 
      name: "Unknown", 
      email: "unknown3@example.com",
      role: "User", 
      lastActive: "1 day ago",
      status: "active"
    },
    { 
      id: "#U1004", 
      name: "Unknown", 
      email: "unknown4@example.com",
      role: "User", 
      lastActive: "3 days ago",
      status: "inactive"
    },
    { 
      id: "#U1005", 
      name: "Unknown", 
      email: "unknown5@example.com",
      role: "User", 
      lastActive: "1 week ago",
      status: "inactive"
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center space-x-4">
          {/* Back Button */}
          <button 
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
            <p className="text-gray-500 text-sm">View and manage system users</p>
          </div>
        </div>
        
        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            <UserPlus className="w-5 h-5 mr-2" />
            Add User
          </button>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
        {/* Table Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="font-semibold text-gray-700">All Users</h2>
          <div className="flex items-center space-x-2">
            <button className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4 mr-2" />
              Filter
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-left text-sm text-gray-500">
              <tr>
                <th className="p-4 font-medium">User ID</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Email</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Last Active</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{user.id}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <UserIcon className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="text-gray-700">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{user.email}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      user.role === "Admin" ? "bg-red-100 text-red-700" :
                      user.role === "Technician" ? "bg-blue-100 text-blue-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500 text-sm">{user.lastActive}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {user.status === "active" ? (
                        <>
                          <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                          Active
                        </>
                      ) : (
                        <>
                          <span className="w-2 h-2 mr-1 bg-gray-500 rounded-full"></span>
                          Inactive
                        </>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            Showing 1 to {users.length} of {users.length} entries
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-gray-700">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;