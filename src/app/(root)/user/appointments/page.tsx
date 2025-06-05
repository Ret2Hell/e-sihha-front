"use client";

import { useState } from "react";
import { mockAppointments } from "@/data/appointments-data";
import { useAppointmentData } from "@/hooks/use-appointments";
import {
  AppointmentHeader,
  AppointmentStats,
  AppointmentTabs,
} from "@/components/appointments";

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const { upcomingAppointments, pastAppointments } =
    useAppointmentData(mockAppointments);

  return (
    <div className="space-y-6">
      <AppointmentHeader />

      <AppointmentStats appointments={mockAppointments} />

      <AppointmentTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        upcomingAppointments={upcomingAppointments}
        pastAppointments={pastAppointments}
      />
    </div>
  );
}
