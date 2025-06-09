import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, LucideIcon } from "lucide-react";
import DoctorAppointmentCard from "./DoctorAppointmentCard";

export default function DoctorAppointmentTabs({
  activeTab,
  onTabChange,
  pendingAppointments,
  upcomingAppointments,
  pastAppointments,
  onStatusChange,
}: DoctorAppointmentTabsProps) {
  const EmptyState = ({
    icon: Icon,
    title,
    description,
  }: {
    icon: LucideIcon;
    title: string;
    description: string;
    showButton?: boolean;
  }) => (
    <Card>
      <CardContent className="p-12 text-center">
        <Icon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {/* {showButton && (
          <Button
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
            asChild
          >
            <Link href="/doctor/appointments/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Appointment
            </Link>
          </Button>
        )} */}
      </CardContent>
    </Card>
  );

  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="space-y-6">
      <TabsList className="grid w-full max-w-lg grid-cols-3">
        <TabsTrigger value="pending">
          Pending ({pendingAppointments.length})
        </TabsTrigger>
        <TabsTrigger value="upcoming">
          Upcoming ({upcomingAppointments.length})
        </TabsTrigger>
        <TabsTrigger value="history">
          History ({pastAppointments.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pending" className="space-y-4">
        {pendingAppointments.length > 0 ? (
          pendingAppointments.map((appointment, index) => (
            <DoctorAppointmentCard
              key={appointment.id}
              appointment={appointment}
              index={index}
              onStatusChange={onStatusChange}
            />
          ))
        ) : (
          <EmptyState
            icon={Clock}
            title="No pending appointments"
            description="You don't have any pending appointments waiting for confirmation."
            showButton
          />
        )}
      </TabsContent>

      <TabsContent value="upcoming" className="space-y-4">
        {upcomingAppointments.length > 0 ? (
          upcomingAppointments.map((appointment, index) => (
            <DoctorAppointmentCard
              key={appointment.id}
              appointment={appointment}
              index={index}
              onStatusChange={onStatusChange}
            />
          ))
        ) : (
          <EmptyState
            icon={Calendar}
            title="No upcoming appointments"
            description="You don't have any scheduled appointments matching the current filters."
            showButton
          />
        )}
      </TabsContent>

      <TabsContent value="history" className="space-y-4">
        {pastAppointments.length > 0 ? (
          pastAppointments.map((appointment, index) => (
            <DoctorAppointmentCard
              key={appointment.id}
              appointment={appointment}
              index={index}
              onStatusChange={onStatusChange}
            />
          ))
        ) : (
          <EmptyState
            icon={Clock}
            title="No appointment history"
            description="Your completed and past appointments will appear here."
          />
        )}
      </TabsContent>
    </Tabs>
  );
}
