"use client";

import { useState } from "react";
import { useGetAppointmentsQuery } from "@/state/api";
import { useAppointmentData } from "@/hooks/use-appointments";
import {
  AppointmentHeader,
  AppointmentStats,
  AppointmentTabs,
} from "@/components/appointments";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const { data: appointments, isLoading, error } = useGetAppointmentsQuery({});

  const { upcomingAppointments, pastAppointments } = useAppointmentData(
    appointments || []
  );

  if (isLoading) {
    return (
      <div className="space-y-6">
        <AppointmentHeader />
        <Card>
          <CardContent className="p-12 text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-teal-600" />
            <p className="text-muted-foreground">Loading appointments...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <AppointmentHeader />
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-red-600 mb-4">Failed to load appointments</p>
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
      <AppointmentHeader />

      <AppointmentStats appointments={appointments || []} />

      <AppointmentTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        upcomingAppointments={upcomingAppointments}
        pastAppointments={pastAppointments}
      />
    </div>
  );
}
