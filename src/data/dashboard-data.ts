interface DashboardStats {
  todayAppointments: number;
  totalPatients: number;
  monthlyRevenue: number;
  averageRating: number;
  pendingAppointments: number;
  completedToday: number;
}

interface TodayAppointment {
  id: string;
  patientName: string;
  time: string;
  type: string;
  status: "confirmed" | "pending";
  duration: number;
}

interface RecentPatient {
  id: string;
  name: string;
  lastVisit: string;
  condition: string;
  status: "stable" | "monitoring" | "improving";
}

export const dashboardStats: DashboardStats = {
  todayAppointments: 8,
  totalPatients: 156,
  monthlyRevenue: 12500,
  averageRating: 4.8,
  pendingAppointments: 3,
  completedToday: 5,
};

export const todayAppointments: TodayAppointment[] = [
  {
    id: "1",
    patientName: "Ahmed Hassan",
    time: "9:00 AM",
    type: "Follow-up",
    status: "confirmed",
    duration: 30,
  },
  {
    id: "2",
    patientName: "Sarah Mohamed",
    time: "10:30 AM",
    type: "Consultation",
    status: "pending",
    duration: 45,
  },
  {
    id: "3",
    patientName: "Omar Ali",
    time: "2:00 PM",
    type: "Check-up",
    status: "confirmed",
    duration: 30,
  },
  {
    id: "4",
    patientName: "Fatima Nour",
    time: "3:30 PM",
    type: "Consultation",
    status: "confirmed",
    duration: 30,
  },
];

export const recentPatients: RecentPatient[] = [
  {
    id: "1",
    name: "Ahmed Hassan",
    lastVisit: "2024-01-10",
    condition: "Hypertension",
    status: "stable",
  },
  {
    id: "2",
    name: "Sarah Mohamed",
    lastVisit: "2024-01-08",
    condition: "Diabetes",
    status: "monitoring",
  },
  {
    id: "3",
    name: "Omar Ali",
    lastVisit: "2024-01-05",
    condition: "Heart Disease",
    status: "improving",
  },
];
