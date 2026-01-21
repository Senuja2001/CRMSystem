import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const MonthlyBarChart = ({ data }) => {
  return (
    <div className="h-64 flex items-center justify-center text-slate-400">
      Monthly chart (data length: {data?.length || 0})
    </div>
  );
};

export default MonthlyBarChart;
