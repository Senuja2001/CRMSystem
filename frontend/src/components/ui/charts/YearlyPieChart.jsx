import {
  PieChart, Pie, Tooltip, ResponsiveContainer, Cell
} from "recharts";

const COLORS = ["#22c55e", "#3b82f6"];

const YearlyPieChart = ({ data }) => {
  return (
    <div className="h-64 flex items-center justify-center text-slate-400">
      Yearly chart (data length: {data?.length || 0})
    </div>
  );
};

export default YearlyPieChart;
