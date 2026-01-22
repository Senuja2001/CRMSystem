import { useEffect, useState } from "react";
import { getCustomers } from "../api/customer.api";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const data = await getCustomers();
        setCustomers(data);
      } catch (err) {
        console.error("Failed to load customers", err);
      } finally {
        setLoading(false);
      }
    };

    loadCustomers();
  }, []);

  if (loading) {
    return <p className="text-slate-400">Loading customers...</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-white">Customers</h1>

      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c._id}
                className="border-t border-slate-800 hover:bg-slate-800/50"
              >
                <td className="px-4 py-2">{c.name}</td>
                <td className="px-4 py-2">{c.phone}</td>
                <td className="px-4 py-2">{c.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
