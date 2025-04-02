import React from "react";

const Header = () => {
  return (
    <nav className="w-64 bg-white p-6 border-r shadow-md h-screen flex flex-col sticky top-0">
      <h2 className="text-xl font-semibold mb-6 text-blue-700 border-b pb-4 border-blue-100">Admin Dashboard</h2>
      <div className="space-y-2 flex-grow">
      </div>
    </nav>
  );
};

export default Header;