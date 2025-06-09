import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function AppointmentStats({
  appointments,
}: AppointmentStatsProps) {
  console.log("Appointments:", appointments);
  const upcomingCount = appointments.filter(
    (apt) => apt.status === "CONFIRMED"
  ).length;
  const completedCount = appointments.filter(
    (apt) => apt.status === "COMPLETED"
  ).length;
  const cancelledCount = appointments.filter(
    (apt) => apt.status === "CANCELLED"
  ).length;
  const totalSpent = appointments
    .filter((apt) => apt.status === "COMPLETED")
    .reduce((sum, apt) => sum + apt.price, 0);

  // Find the next upcoming appointment
  const upcomingAppointments = appointments
    .filter((apt) => apt.status === "CONFIRMED")
    .sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateA.getTime() - dateB.getTime();
    });

  const nextAppointment = upcomingAppointments[0];

  const getNextAppointmentSubtitle = () => {
    if (!nextAppointment) return "No upcoming appointments";

    const appointmentDate = new Date(nextAppointment.date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let dateText = "";
    if (appointmentDate.toDateString() === today.toDateString()) {
      dateText = "Today";
    } else if (appointmentDate.toDateString() === tomorrow.toDateString()) {
      dateText = "Tomorrow";
    } else {
      dateText = appointmentDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }

    return `Next: ${dateText}, ${nextAppointment.time}`;
  };

  const statsCards = [
    {
      title: "Upcoming",
      value: upcomingCount,
      color: "text-blue-600",
      subtitle: getNextAppointmentSubtitle(),
    },
    {
      title: "Completed",
      value: completedCount,
      color: "text-green-600",
      subtitle: "This year",
    },
    {
      title: "Total Spent",
      value: `${totalSpent} DT`,
      color: "text-teal-600",
      subtitle: "This year",
    },
    {
      title: "Cancelled",
      value: cancelledCount,
      color: "text-red-600",
      subtitle: "This year",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {statsCards.map((card, index) => {
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${card.color}`}>
                {card.value}
              </div>
              <p className="text-xs text-muted-foreground">{card.subtitle}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
