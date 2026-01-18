import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800">
        <div className="p-4 text-lg font-semibold">
          CRM System
        </div>

        <nav className="px-4 space-y-2 text-sm">
          <div className="text-slate-400 hover:text-white cursor-pointer">
            Dashboard
          </div>
          <div className="text-slate-400 hover:text-white cursor-pointer">
            Customers
          </div>
          <div className="text-slate-400 hover:text-white cursor-pointer">
            Credit Bills
          </div>
          <div className="text-slate-400 hover:text-white cursor-pointer">
            Payments
          </div>
          <div className="text-slate-400 hover:text-white cursor-pointer">
            Reports
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
