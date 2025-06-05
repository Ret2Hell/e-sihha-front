import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Plus } from "lucide-react";
import Link from "next/link";

export default function AppointmentEmptyState({ type }: EmptyStateProps) {
  const config = {
    upcoming: {
      icon: Calendar,
      title: "No upcoming appointments",
      description:
        "You don't have any scheduled appointments. Book one with your preferred doctor.",
      showButton: true,
    },
    history: {
      icon: Clock,
      title: "No appointment history",
      description:
        "Your completed and cancelled appointments will appear here.",
      showButton: false,
    },
  };

  const { icon: IconComponent, title, description, showButton } = config[type];

  return (
    <Card>
      <CardContent className="p-12 text-center">
        <IconComponent className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {showButton && (
          <Button
            asChild
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
          >
            <Link href="/doctors">
              <Plus className="mr-2 h-4 w-4" />
              Book Appointment
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
