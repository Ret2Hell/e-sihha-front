import { useMemo } from "react";
import {
  dashboardStats,
  todayAppointments,
  recentPatients,
} from "@/data/dashboard-data";

export function useDashboardData() {
  const data = useMemo(() => {
    return {
      stats: dashboardStats,
      appointments: todayAppointments,
      patients: recentPatients,
    };
  }, []);

  return data;
}
