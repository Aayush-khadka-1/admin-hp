import React from 'react';

const TicketsTable = ({ tickets }) => {
  return (
    <div className="tickets-table bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left text-gray-700">Ticket ID</th>
            <th className="p-3 text-left text-gray-700">Subject</th>
            <th className="p-3 text-left text-gray-700">Status</th>
            <th className="p-3 text-left text-gray-700">Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500">
                No tickets available
              </td>
            </tr>
          ) : (
            tickets.map((ticket, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{ticket.id}</td>
                <td className="p-3">{ticket.subject}</td>
                <td className="p-3">{ticket.status}</td>
                <td className="p-3">{ticket.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsTable;