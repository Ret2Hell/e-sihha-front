import React from "react";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DoctorContact: React.FC<DoctorContactProps> = ({ contact }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-teal-600" />
          <div>
            <div className="font-medium">Phone</div>
            <div className="text-sm text-muted-foreground">{contact.phone}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-teal-600" />
          <div>
            <div className="font-medium">Email</div>
            <div className="text-sm text-muted-foreground">{contact.email}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorContact;
