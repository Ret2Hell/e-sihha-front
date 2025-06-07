"use client";

import { useState } from "react";
import { mockAppointments } from "@/data/appointments-data";
import { useDoctorAppointmentFilters } from "@/hooks/use-doctor-appointments";
import {
  DoctorAppointmentHeader,
  DoctorAppointmentStats,
  DoctorAppointmentTabs,
  DoctorAppointmentFilters,
} from "@/components/doctor/appointments";

export default function DoctorAppointmentsPage() {
  const [activeTab, setActiveTab] = useState("pending");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const { filteredPending, filteredUpcoming, filteredPast } =
    useDoctorAppointmentFilters(mockAppointments, statusFilter, typeFilter);

  const handleStatusChange = (appointmentId: string, newStatus: string) => {
    console.log(
      `Updating appointment ${appointmentId} to status: ${newStatus}`
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <DoctorAppointmentHeader
        title="Appointments"
        description="Manage your patient appointments and schedule"
      />

      {/* Stats Cards */}
      <DoctorAppointmentStats appointments={mockAppointments} />

      {/* Appointments Tabs */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold mr-4">Filter by:</h2>
          </div>
          <DoctorAppointmentFilters
            statusFilter={statusFilter}
            typeFilter={typeFilter}
            onStatusFilterChange={setStatusFilter}
            onTypeFilterChange={setTypeFilter}
          />
        </div>

        <DoctorAppointmentTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          pendingAppointments={filteredPending}
          upcomingAppointments={filteredUpcoming}
          pastAppointments={filteredPast}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  );
}
