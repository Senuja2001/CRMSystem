import api from "./axios";

export const getDashboardSummary = async () => {
  const { data } = await api.get("/reports/dashboard");
  return data;
};

export const getMonthlySummary = async () => {
  const { data } = await api.get("/reports/monthly-summary");
  return data;
};

export const getYearlySummary = async () => {
  const { data } = await api.get("/reports/yearly-summary");
  return data;
};
