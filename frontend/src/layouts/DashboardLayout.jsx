import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4">
        <div className="mb-6 text-lg font-semibold">
          CRM System
        </div>

        <nav className="space-y-2 text-sm">
          <NavLink to="/" className="block text-slate-400 hover:text-white">
            Dashboard
          </NavLink>
          <NavLink to="/customers" className="block text-slate-400 hover:text-white">
            Customers
          </NavLink>
          <NavLink to="/credit-bills" className="block text-slate-400 hover:text-white">
            Credit Bills
          </NavLink>
          <NavLink to="/payments" className="block text-slate-400 hover:text-white">
            Payments
          </NavLink>
          <NavLink to="/reports" className="block text-slate-400 hover:text-white">
            Reports
          </NavLink>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
