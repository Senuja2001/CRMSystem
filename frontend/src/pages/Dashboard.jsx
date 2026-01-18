import React from "react";
// 👇 ADD THIS LINE to fix the "NavLink is not defined" error
import { NavLink, Outlet } from "react-router-dom"; 


const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Dashboard
        </h1>
        <p className="text-slate-400">
          Overview of credits and collections
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400">Total Credits</p>
          <h2 className="text-2xl font-bold text-white">LKR 0.00</h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400">Cash Collected</p>
          <h2 className="text-2xl font-bold text-green-400">LKR 0.00</h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400">Cheque Collected</p>
          <h2 className="text-2xl font-bold text-blue-400">LKR 0.00</h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400">Pending Cheques</p>
          <h2 className="text-2xl font-bold text-yellow-400">0</h2>
        </div>

      </div>

      {/* Placeholder Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <h3 className="text-lg font-medium text-white mb-2">
            Monthly Summary
          </h3>
          <p className="text-slate-400 text-sm">
            Monthly credit and collection charts will appear here.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <h3 className="text-lg font-medium text-white mb-2">
            Yearly Summary
          </h3>
          <p className="text-slate-400 text-sm">
            Yearly performance charts will appear here.
          </p>
        </div>

      </div>

      
    </div>
  );
};

export default Dashboard;