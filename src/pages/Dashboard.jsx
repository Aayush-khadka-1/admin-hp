import React from 'react';
import StatsCard from '../components/StatsCard';
import TicketsTable from '../components/TicketsTable';
import SideButton from '../components/SideButton';

const Dashboard = () => {
  return (
    <div className="dashboard flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="flex gap-4 mb-6">
        <SideButton />
      </div>
      <div className="stats-section grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Total Tickets" value="120" />
        <StatsCard title="Open Tickets" value="45" />
        <StatsCard title="Closed Tickets" value="75" />
      </div>
      <TicketsTable tickets={[]} />
    </div>
  );
};

export default Dashboard;