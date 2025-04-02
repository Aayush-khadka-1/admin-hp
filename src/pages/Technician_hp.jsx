import React from "react";
import { ArrowLeft, Mail, Phone, MessageSquare } from "lucide-react";

const Technician_hp = () => {
  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      {/* Back Button */}
      <button 
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center shadow-sm"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Dashboard
      </button>

      {/* Header */}
      <div className="bg-white shadow-sm border border-blue-100 rounded-xl p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-100"
            />
            <span className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-blue-800">Name</h1>
            <p className="text-blue-600 font-medium">Senior IT Technician</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                Employee ID: 123456
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                IT Support
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                Upper Mustang
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium">
              Edit Profile
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all text-sm font-medium">
              Message
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Information */}
          <div className="bg-white shadow-sm border border-blue-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4 text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-blue-700 font-medium">Somthing@company.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4 text-blue-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="text-blue-700 font-medium">+977 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4 text-blue-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Live Chat</p>
                  <p className="text-green-600 font-medium flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white shadow-sm border border-blue-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Network Troubleshooting",
                "Hardware Maintenance",
                "Software Installation",
                "Customer Service",
                "IT Security",
                "Cloud Computing",
                "Database Management",
                "System Administration"
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Performance Metrics */}
          <div className="bg-white shadow-sm border border-blue-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
              Performance Metrics
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-3xl font-bold text-blue-700">200</p>
                <p className="text-blue-600 text-sm">Tickets Resolved</p>
                <div className="mt-2 h-1.5 bg-blue-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-3xl font-bold text-blue-700">98%</p>
                <p className="text-blue-600 text-sm">Customer Satisfaction</p>
                <div className="mt-2 h-1.5 bg-blue-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-3xl font-bold text-blue-700">2h</p>
                <p className="text-blue-600 text-sm">Avg. Response Time</p>
                <div className="mt-2 h-1.5 bg-blue-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-3xl font-bold text-blue-700">24</p>
                <p className="text-blue-600 text-sm">Current Tickets</p>
                <div className="mt-2 h-1.5 bg-blue-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white shadow-sm border border-blue-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
              Availability
            </h2>
            <div className="space-y-3">
              {[
                { day: "Monday", time: "9:00 AM - 6:00 PM", status: "Available" },
                { day: "Tuesday", time: "9:00 AM - 6:00 PM", status: "Available" },
                { day: "Wednesday", time: "9:00 AM - 6:00 PM", status: "Available" },
                { day: "Thursday", time: "9:00 AM - 6:00 PM", status: "Available" },
                { day: "Friday", time: "9:00 AM - 3:00 PM", status: "Available" },
                { day: "Saturday", time: "Not Available", status: "Off" },
                { day: "Sunday", time: "Not Available", status: "Off" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-blue-800 font-medium">{item.day}</span>
                  <span className="text-blue-600 text-sm">{item.time}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    item.status === "Available" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technician_hp;