import { useMemo } from "react";

export function useAppointmentData(appointments: Appointment[]) {
  const appointmentCounts = useMemo(() => {
    const upcoming = appointments.filter(
      (apt) => apt.status === "CONFIRMED" || apt.status === "PENDING"
    );
    const past = appointments.filter(
      (apt) => apt.status === "COMPLETED" || apt.status === "CANCELLED"
    );

    return {
      upcomingAppointments: upcoming,
      pastAppointments: past,
      totalUpcoming: upcoming.length,
      totalPast: past.length,
    };
  }, [appointments]);

  return appointmentCounts;
}
