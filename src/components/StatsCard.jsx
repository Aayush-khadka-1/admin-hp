import React from 'react';

const StatsCard = ({ title, value }) => {
  return (
    <div className="stats-card bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default StatsCard;