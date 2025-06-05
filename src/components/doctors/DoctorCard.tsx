import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getInitials } from "@/lib/utils";

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, index }) => {
  const isAvailableToday = doctor.availability === "Available Today";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 border-2 border-white shadow-md">
              <AvatarImage src={doctor.image} alt={doctor.name} />
              <AvatarFallback className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-lg font-semibold">
                {getInitials(doctor.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">
                {doctor.name}
              </CardTitle>
              <CardDescription className="text-sm font-medium text-teal-600">
                {doctor.specialty}
              </CardDescription>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{doctor.experience} years experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{doctor.location}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Badge
                variant={isAvailableToday ? "default" : "secondary"}
                className={
                  isAvailableToday ? "bg-green-100 text-green-700" : ""
                }
              >
                {doctor.availability}
              </Badge>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-teal-600">
                {doctor.price}DT
              </div>
              <div className="text-xs text-muted-foreground">
                per consultation
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button asChild variant="outline" className="flex-1">
              <Link href={`/user/doctors/${doctor.id}`}>View Profile</Link>
            </Button>
            <Button
              asChild
              className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
            >
              <Link href={`/user/doctors/${doctor.id}/book`}>
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
