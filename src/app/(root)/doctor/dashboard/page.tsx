"use client";

import {
  DashboardHeader,
  DashboardStats,
  TodayAppointmentsCard,
  RecentPatientsCard,
} from "@/components/dashboard";
import { useDashboardData } from "@/hooks/use-dashboard";
import { useGetAppointmentsByEmailQuery } from "@/state/api";
import { useUser } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useMemo } from "react";

export default function DoctorDashboardPage() {
  const { user } = useUser();
  const {
    data: appointments = [],
    isLoading,
    error,
  } = useGetAppointmentsByEmailQuery(user?.emailAddresses[0].emailAddress);

  const { patients } = useDashboardData();

  // Calculate dashboard stats from fetched appointments
  const stats = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayAppointments = appointments.filter(
      (appointment: Appointment) => {
        const aptDate = new Date(appointment.date);
        const today = new Date();
        return (
          aptDate.getFullYear() === today.getFullYear() &&
          aptDate.getMonth() === today.getMonth() &&
          aptDate.getDate() - 1 === today.getDate()
        );
      }
    );

    const completedToday = todayAppointments.filter(
      (appointment: Appointment) => appointment.status === "COMPLETED"
    ).length;

    const pendingAppointments = appointments.filter(
      (appointment: Appointment) => appointment.status === "PENDING"
    ).length;

    // Calculate monthly revenue (current month completed appointments)
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const monthlyRevenue = appointments
      .filter((appointment: Appointment) => {
        const appointmentDate = new Date(appointment.date);
        return (
          appointment.status === "COMPLETED" &&
          appointmentDate.getMonth() === currentMonth &&
          appointmentDate.getFullYear() === currentYear
        );
      })
      .reduce(
        (total: number, appointment: Appointment) => total + appointment.price,
        0
      );

    // Calculate total unique patients
    const uniquePatients = new Set(
      appointments.map((appointment: Appointment) => appointment.patientId)
    );
    const totalPatients = uniquePatients.size;

    // Mock average rating for now
    const averageRating = 4.8;

    return {
      todayAppointments: todayAppointments.length,
      totalPatients,
      monthlyRevenue,
      averageRating,
      pendingAppointments,
      completedToday,
    };
  }, [appointments]);

  // Filter today's appointments for the appointments card
  const todaysAppointmentsList = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return appointments.filter((appointment: Appointment) => {
      const aptDate = new Date(appointment.date);
      return (
        aptDate.getFullYear() === today.getFullYear() &&
        aptDate.getMonth() === today.getMonth() &&
        aptDate.getDate() - 1 === today.getDate()
      );
    });
  }, [appointments]);

  // Loading state
  if (isLoading) {
    return (
      <div className="space-y-6">
        <DashboardHeader doctorName="Dr. Ahmed" />
        <Card>
          <CardContent className="p-12 text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-teal-600" />
            <p className="text-muted-foreground">Loading dashboard...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="space-y-6">
        <DashboardHeader doctorName="Dr. Ahmed" />
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-red-600 mb-4">Failed to load dashboard data</p>
            <p className="text-muted-foreground">
              Please try refreshing the page
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

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
          <TodayAppointmentsCard appointments={todaysAppointmentsList} />
        </div>

        {/* Recent Patients */}
        <RecentPatientsCard patients={patients} />
      </div>
    </div>
  );
}
