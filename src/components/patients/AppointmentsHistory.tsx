import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AppointmentsHistory({
  appointments,
}: AppointmentsHistoryProps) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "scheduled":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getStatusClassName = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "scheduled":
        return "bg-blue-100 text-blue-700";
      default:
        return "";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointment History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <div className="font-semibold">{appointment.type}</div>
                <div className="text-sm text-muted-foreground">
                  {new Date(appointment.date).toLocaleDateString()} at{" "}
                  {appointment.time}
                </div>
              </div>
              <Badge
                variant={getStatusVariant(appointment.status)}
                className={getStatusClassName(appointment.status)}
              >
                {appointment.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
