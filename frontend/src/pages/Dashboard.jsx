import { useEffect, useState } from "react";
import { getDashboardSummary } from "../api/dashboard.api";
import { getMonthlySummary, getYearlySummary } from "../api/dashboard.api";
import MonthlyBarChart from "../components/ui/charts/MonthlyBarChart";
import YearlyPieChart from "../components/ui/charts/YearlyPieChart";


const Dashboard = () => {
  const [summary, setSummary] = useState({
    totalCredits: 0,
    cashCollected: 0,
    chequeCollected: 0,
    pendingCheques: 0,
  });

  const [monthlyData, setMonthlyData] = useState([]);
  const [yearlyData, setYearlyData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ---------------- FETCH DATA ----------------
  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const summaryData = await getDashboardSummary();
        const monthly = await getMonthlySummary();
        const yearly = await getYearlySummary();

        setSummary(summaryData);
        setMonthlyData(monthly);
        setYearlyData(yearly);
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  // ---------------- LOADING ----------------
  if (loading) {
    return <p className="text-slate-400">Loading dashboard...</p>;
  }

  // ---------------- UI ----------------
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <p className="text-slate-400">
          Overview of credits and collections
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400">Total Credits</p>
          <h2 className="text-2xl font-bold text-white">
            LKR {summary.totalCredits}
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400">Cash Collected</p>
          <h2 className="text-2xl font-bold text-green-400">
            LKR {summary.cashCollected}
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400">Cheque Collected</p>
          <h2 className="text-2xl font-bold text-blue-400">
            LKR {summary.chequeCollected}
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400">Pending Cheques</p>
          <h2 className="text-2xl font-bold text-yellow-400">
            {summary.pendingCheques}
          </h2>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <h3 className="text-lg font-medium text-white mb-2">
            Monthly Summary
          </h3>
          <MonthlyBarChart data={monthlyData} />
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <h3 className="text-lg font-medium text-white mb-2">
            Yearly Summary
          </h3>
          <YearlyPieChart data={yearlyData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;