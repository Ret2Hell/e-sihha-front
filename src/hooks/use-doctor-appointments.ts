import { useMemo } from "react";

export function useDoctorAppointmentData(appointments: Appointment[]) {
  const appointmentData = useMemo(() => {
    const pending = appointments.filter((apt) => apt.status === "pending");

    const upcoming = appointments.filter(
      (apt) => new Date(apt.date) >= new Date() && apt.status === "upcoming"
    );

    const past = appointments.filter(
      (apt) =>
        new Date(apt.date) < new Date() &&
        (apt.status === "completed" || apt.status === "cancelled")
    );

    return {
      pendingAppointments: pending,
      upcomingAppointments: upcoming,
      pastAppointments: past,
    };
  }, [appointments]);

  return appointmentData;
}

export function useDoctorAppointmentFilters(
  appointments: Appointment[],
  statusFilter: string,
  typeFilter: string
) {
  return useMemo(() => {
    const filterAppointments = (appointmentList: Appointment[]) => {
      return appointmentList.filter((apt) => {
        const matchesStatus =
          statusFilter === "all" || apt.status === statusFilter;
        const matchesType = typeFilter === "all" || apt.type === typeFilter;
        return matchesStatus && matchesType;
      });
    };

    // Get categorized appointments directly
    const pending = appointments.filter((apt) => apt.status === "pending");

    const upcoming = appointments.filter(
      (apt) => new Date(apt.date) >= new Date() && apt.status === "upcoming"
    );

    const past = appointments.filter(
      (apt) =>
        new Date(apt.date) < new Date() &&
        (apt.status === "completed" || apt.status === "cancelled")
    );

    return {
      filteredPending: filterAppointments(pending),
      filteredUpcoming: filterAppointments(upcoming),
      filteredPast: filterAppointments(past),
    };
  }, [appointments, statusFilter, typeFilter]);
}
