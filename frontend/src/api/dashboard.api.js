import api from "./axios";

export const getDashboardSummary = async () => {
  const response = await api.get("/reports/dashboard");
  return response.data;
};
