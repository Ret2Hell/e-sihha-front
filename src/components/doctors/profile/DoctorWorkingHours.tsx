import React from "react";
import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Static dummy working hours data with 30-minute appointment intervals
const staticWorkingHours = {
  monday: "9:00 AM - 5:30 PM",
  tuesday: "9:00 AM - 5:30 PM",
  wednesday: "9:00 AM - 5:30 PM",
  thursday: "9:00 AM - 5:30 PM",
  friday: "9:00 AM - 3:30 PM",
  saturday: "10:00 AM - 2:30 PM",
  sunday: "Closed",
};

const DoctorWorkingHours: React.FC<DoctorWorkingHoursProps> = () => {
  // Use static data instead of backend data (ignoring workingHours prop from backend)
  const displayHours = staticWorkingHours;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Working Hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {Object.entries(displayHours).map(([day, hours]) => (
            <div key={day} className="flex justify-between items-center">
              <span className="capitalize font-medium">{day}</span>
              <span className="text-sm text-muted-foreground">{hours}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorWorkingHours;
