import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-gray-100 p-4 border-b border-gray-200">
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/technician" className="text-blue-600 hover:text-blue-800 font-medium">
            Technician
          </Link>
        </li>
        <li>
          <Link to="/reports" className="text-blue-600 hover:text-blue-800 font-medium">
            Reports
          </Link>
        </li>
        <li>
          <Link to="/users" className="text-blue-600 hover:text-blue-800 font-medium">
            Users
          </Link>
        </li>
        <li>
          <Link to="/settings" className="text-blue-600 hover:text-blue-800 font-medium">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;