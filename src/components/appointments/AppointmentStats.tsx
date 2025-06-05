import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function AppointmentStats({
  appointments,
}: AppointmentStatsProps) {
  const upcomingCount = appointments.filter(
    (apt) => apt.status === "upcoming"
  ).length;
  const completedCount = appointments.filter(
    (apt) => apt.status === "completed"
  ).length;
  const cancelledCount = appointments.filter(
    (apt) => apt.status === "cancelled"
  ).length;
  const totalSpent = appointments
    .filter((apt) => apt.status === "completed")
    .reduce((sum, apt) => sum + apt.price, 0);

  const statsCards = [
    {
      title: "Upcoming",
      value: upcomingCount,
      color: "text-blue-600",
      subtitle: "Next: Tomorrow, 10:00 AM",
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
