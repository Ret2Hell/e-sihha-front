import React from "react";
import { Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DoctorServices: React.FC<DoctorServicesProps> = ({ services }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Stethoscope className="h-5 w-5" />
          Services Offered
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 rounded-lg bg-teal-50 dark:bg-teal-950"
            >
              <div className="h-2 w-2 rounded-full bg-teal-500"></div>
              <span className="text-sm">{service}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorServices;
