import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

export default function PatientHeader({ patient }: PatientHeaderProps) {
  const initials = patient.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Avatar className="h-24 w-24 border-4 border-white shadow-lg mx-auto md:mx-0">
            <AvatarFallback className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-2xl font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{patient.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">
              {patient.age} years old • {patient.gender}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{patient.phone}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{patient.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{patient.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Appointment
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
