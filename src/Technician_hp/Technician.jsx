import React from "react";
import { 
  Search, Home, ClipboardList, Settings, 
  MessageSquare, HelpCircle, Bell, User, ChevronDown,
  AlertTriangle, AlertCircle, Clock
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Technician = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/technician" },
    { icon: ClipboardList, label: "Assigned Tickets", path: "/technician/tickets" }
  ];

  // Sample ticket data
  const tickets = [
    { 
      id: "#TKT-101", 
      title: "Login Issue", 
      priority: "High", 
      status: "In Progress",
      customer: "John Smith",
      assigned: "2 hours ago",
      updated: "30 minutes ago"
    },
    { 
      id: "#TKT-102", 
      title: "Software Bug", 
      priority: "Medium", 
      status: "Open",
      customer: "Sarah Johnson",
      assigned: "5 hours ago",
      updated: "1 hour ago"
    },
    { 
      id: "#TKT-103", 
      title: "Network Connectivity", 
      priority: "Low", 
      status: "Resolved",
      customer: "Michael Brown",
      assigned: "1 day ago",
      updated: "2 hours ago"
    }
  ];

  return (
    <div className="flex bg-gray-50">
      {/* Sidebar */}
      <nav className="w-64 bg-white p-6 border-r border-gray-200 h-screen sticky top-0 flex flex-col">
        <h2 className="text-xl font-semibold mb-6 text-blue-600 border-b pb-4 border-gray-200">
          Technician Panel
        </h2>
        
        {/* Main Navigation */}
        <div className="space-y-2 flex-grow">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center p-3 rounded-lg transition-all ${
                location.pathname === item.path 
                  ? "bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-500" 
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
              {location.pathname === item.path && (
                <div className="ml-auto w-2 h-2 rounded-full bg-blue-500"></div>
              )}
            </Link>
          ))}

          {/* Settings */}
          <Link
            to="/technician/settings"
            className={`flex items-center p-3 rounded-lg transition-all ${
              location.pathname === "/technician/settings"
                ? "bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-500"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
        </div>

        {/* Support Links */}
        <div className="pt-6 space-y-2 border-t border-gray-200">
          <a href="#" className="flex items-center p-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
            <MessageSquare className="w-5 h-5 mr-3" />
            Feedback
          </a>
          <a href="#" className="flex items-center p-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
            <HelpCircle className="w-5 h-5 mr-3" />
            Help Center
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-8 min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Technician Dashboard</h1>
            <p className="text-gray-500 text-sm">Welcome back! Here's your current workload</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
              />
            </div>
            
            {/* User Profile */}
            <div className="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <User className="w-4 h-4" />
              </div>
              <span className="text-gray-700 font-medium">Technician</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Open Tickets */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Open Tickets</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">12</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                <AlertCircle className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: '60%' }}></div>
            </div>
          </div>

          {/* High Priority */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">High Priority</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">3</p>
              </div>
              <div className="p-3 rounded-lg bg-red-100 text-red-600">
                <AlertTriangle className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-red-500" style={{ width: '25%' }}></div>
            </div>
          </div>

          {/* Avg. Response Time */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Avg. Response</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">2h 15m</p>
              </div>
              <div className="p-3 rounded-lg bg-green-100 text-green-600">
                <Clock className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        {/* Assigned Tickets */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Assigned Tickets</h2>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                Filter
                <ChevronDown className="w-4 h-4 ml-1 inline" />
              </button>
              <button className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                New Ticket
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-left text-sm text-gray-500">
                <tr>
                  <th className="p-4 font-medium">Ticket ID</th>
                  <th className="p-4 font-medium">Title</th>
                  <th className="p-4 font-medium">Customer</th>
                  <th className="p-4 font-medium">Priority</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Last Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tickets.map((ticket, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-blue-600">{ticket.id}</td>
                    <td className="p-4 text-gray-800">{ticket.title}</td>
                    <td className="p-4 text-gray-600">{ticket.customer}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        ticket.priority === "High" ? "bg-red-100 text-red-700" :
                        ticket.priority === "Medium" ? "bg-yellow-100 text-yellow-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        ticket.status === "Open" ? "bg-blue-100 text-blue-700" :
                        ticket.status === "In Progress" ? "bg-purple-100 text-purple-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500 text-sm">{ticket.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-4 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Showing 1 to {tickets.length} of {tickets.length} tickets
            </div>
            <div className="flex space-x-2">
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
    </div>
  );
};

export default Technician;