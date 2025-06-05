import React from "react";
import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DoctorWorkingHours: React.FC<DoctorWorkingHoursProps> = ({
  workingHours,
}) => {
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
          {Object.entries(workingHours).map(([day, hours]) => (
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
