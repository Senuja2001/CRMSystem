import { getDashboardSummary, getPendingCheques } from "../services/report.service.js";

export const dashboardSummary = async (req, res) => {
  const data = await getDashboardSummary();
  res.json(data);
};

export const pendingCheques = async (req, res) => {
  const cheques = await getPendingCheques(req.query);
  res.json(cheques);
};
