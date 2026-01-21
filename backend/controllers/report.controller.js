import { getDashboardSummary, getPendingCheques } from "../services/report.service.js";

export const dashboardSummary = async (req, res) => {
  const data = await getDashboardSummary();
  res.json(data);
};

export const pendingCheques = async (req, res) => {
  const cheques = await getPendingCheques(req.query);
  res.json(cheques);
};

import {
  getMonthlySummary,
  getYearlySummary,
} from "../services/report.service.js";

export const monthlySummary = async (req, res) => {
  res.json([]); // placeholder, real aggregation later
};

export const yearlySummary = async (req, res) => {
  res.json([]); // placeholder
};


