import React from "react";
import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DoctorAbout: React.FC<DoctorAboutProps> = ({ doctor }) => {
  const doctorLastName = doctor.name.split(" ").pop();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          About Dr. {doctorLastName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{doctor.about}</p>
      </CardContent>
    </Card>
  );
};

export default DoctorAbout;
