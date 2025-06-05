import React from "react";
import { Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DoctorQualifications: React.FC<DoctorQualificationsProps> = ({
  qualifications,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Education & Qualifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {qualifications.map((qualification, index) => (
            <li key={index} className="flex items-start gap-2">
              <Award className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
              <span>{qualification}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DoctorQualifications;
