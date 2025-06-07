import {
  DashboardHeader,
  DashboardStats,
  TodayAppointmentsCard,
  RecentPatientsCard,
} from "@/components/dashboard";
import { useDashboardData } from "@/hooks/use-dashboard";

export default function DoctorDashboardPage() {
  const { stats, appointments, patients } = useDashboardData();

  return (
    <div className="space-y-6">
      {/* Header */}
      <DashboardHeader doctorName="Dr. Ahmed" />

      {/* Stats Cards */}
      <DashboardStats stats={stats} />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Today's Appointments */}
        <div className="lg:col-span-2">
          <TodayAppointmentsCard appointments={appointments} />
        </div>

        {/* Recent Patients */}
        <RecentPatientsCard patients={patients} />
      </div>
    </div>
  );
}
