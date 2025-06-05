import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppointmentCard from "./AppointmentCard";
import AppointmentEmptyState from "./AppointmentEmptyState";

export default function AppointmentTabs({
  activeTab,
  setActiveTab,
  upcomingAppointments,
  pastAppointments,
}: AppointmentTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
      <div className="flex items-center justify-between">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="upcoming">
            Upcoming ({upcomingAppointments.length})
          </TabsTrigger>
          <TabsTrigger value="history">
            History ({pastAppointments.length})
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="upcoming" className="space-y-4">
        {upcomingAppointments.length > 0 ? (
          upcomingAppointments.map((appointment, index) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              index={index}
            />
          ))
        ) : (
          <AppointmentEmptyState type="upcoming" />
        )}
      </TabsContent>

      <TabsContent value="history" className="space-y-4">
        {pastAppointments.length > 0 ? (
          pastAppointments.map((appointment, index) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              index={index}
            />
          ))
        ) : (
          <AppointmentEmptyState type="history" />
        )}
      </TabsContent>
    </Tabs>
  );
}
