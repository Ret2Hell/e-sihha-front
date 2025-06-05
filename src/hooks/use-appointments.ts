import { useMemo } from "react";

export function useAppointmentData(appointments: Appointment[]) {
  const appointmentCounts = useMemo(() => {
    const upcoming = appointments.filter((apt) => apt.status === "upcoming");
    const past = appointments.filter(
      (apt) => apt.status === "completed" || apt.status === "cancelled"
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
