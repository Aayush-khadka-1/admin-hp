import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-64 bg-white p-6 border-r shadow-md h-screen flex flex-col sticky top-0">
      <h2 className="text-xl font-semibold mb-6 text-blue-700 border-b pb-4 border-blue-100">Admin Dashboard</h2>
      <div className="space-y-2 flex-grow">
        <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded">
          Dashboard
        </Link>
        <Link to="/technician" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded">
          Technician
        </Link>
        <Link to="/reports" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded">
          Reports
        </Link>
        <Link to="/users" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded">
          Users
        </Link>
        <Link to="/settings" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded">
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Header;