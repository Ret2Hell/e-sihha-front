import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InfoItem } from "@/components/InfoItems";
import { getInitials } from "@/lib/utils";

const DoctorHeader: React.FC<DoctorHeaderProps> = ({ doctor }) => {
  const isAvailableToday = doctor.availability === "Available Today";

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Avatar className="h-32 w-32 border-4 border-white shadow-lg mx-auto md:mx-0">
            <AvatarImage
              src={doctor.image || "/placeholder.svg"}
              alt={doctor.name}
            />
            <AvatarFallback className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-2xl font-bold">
              {getInitials(doctor.name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
            <p className="text-xl text-teal-600 font-semibold mb-4">
              {doctor.specialty}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
              <InfoItem
                icon={Clock}
                label=""
                value={`${doctor.experience} years experience`}
              />
              <InfoItem icon={MapPin} label="" value={doctor.location} />
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              <Badge
                variant={isAvailableToday ? "default" : "secondary"}
                className={
                  isAvailableToday ? "bg-green-100 text-green-700" : ""
                }
              >
                {doctor.availability}
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">
                  {doctor.price} DT
                </div>
                <div className="text-sm text-muted-foreground">
                  per consultation
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
              >
                <Link href={`/user/doctors/${doctor.id}/book`}>
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorHeader;
