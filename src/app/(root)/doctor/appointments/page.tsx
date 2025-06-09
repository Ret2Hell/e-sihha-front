"use client";

import { useState } from "react";
import { useDoctorAppointmentData } from "@/hooks/use-doctor-appointments";
import {
  DoctorAppointmentHeader,
  DoctorAppointmentStats,
  DoctorAppointmentTabs,
} from "@/components/doctor/appointments";
import {
  useGetAppointmentsByEmailQuery,
  useAcceptAppointmentMutation,
  useCancelAppointmentMutation,
  useCompleteAppointmentMutation,
} from "@/state/api";
import { useUser } from "@clerk/nextjs";

export default function DoctorAppointmentsPage() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("pending");

  // Fetch appointments from API
  const {
    data: appointments = [],
    isLoading,
    error,
  } = useGetAppointmentsByEmailQuery(user?.emailAddresses[0].emailAddress);

  // Mutation hooks for appointment status changes
  const [acceptAppointment] = useAcceptAppointmentMutation();
  const [cancelAppointment] = useCancelAppointmentMutation();
  const [completeAppointment] = useCompleteAppointmentMutation();

  const { pendingAppointments, upcomingAppointments, pastAppointments } =
    useDoctorAppointmentData(appointments);

  const handleStatusChange = async (
    appointmentId: string,
    newStatus: string
  ) => {
    try {
      if (newStatus === "CONFIRMED") {
        await acceptAppointment(appointmentId).unwrap();
        console.log(`Appointment ${appointmentId} accepted successfully`);
      } else if (newStatus === "CANCELLED") {
        await cancelAppointment(appointmentId).unwrap();
        console.log(`Appointment ${appointmentId} cancelled successfully`);
      } else if (newStatus === "COMPLETED") {
        await completeAppointment(appointmentId).unwrap();
        console.log(`Appointment ${appointmentId} completed successfully`);
      } else {
        console.log(
          `Status change to ${newStatus} not handled by API endpoints`
        );
      }
    } catch (error) {
      console.error(`Failed to update appointment ${appointmentId}:`, error);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="space-y-6">
        <DoctorAppointmentHeader
          title="Appointments"
          description="Manage your patient appointments and schedule"
        />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading appointments...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="space-y-6">
        <DoctorAppointmentHeader
          title="Appointments"
          description="Manage your patient appointments and schedule"
        />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-destructive mb-2">Failed to load appointments</p>
            <p className="text-muted-foreground text-sm">
              Please try refreshing the page or contact support if the problem
              persists.
            </p>
          </div>
        </div>
      </div>
    );
  }
  console.log("Appointments data:", appointments);
  return (
    <div className="space-y-6">
      {/* Header */}
      <DoctorAppointmentHeader
        title="Appointments"
        description="Manage your patient appointments and schedule"
      />

      {/* Stats Cards */}
      <DoctorAppointmentStats appointments={appointments} />

      {/* Appointments Tabs */}
      <div className="space-y-6">
        <DoctorAppointmentTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          pendingAppointments={pendingAppointments}
          upcomingAppointments={upcomingAppointments}
          pastAppointments={pastAppointments}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  );
}
