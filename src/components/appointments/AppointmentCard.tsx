import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, Clock, MoreHorizontal, Video, MapPin } from "lucide-react";
import { getStatusColor, capitalizeStatus, getInitials } from "@/lib/utils";

export default function AppointmentCard({
  appointment,
  index,
}: AppointmentCardProps) {
  const doctorInitials = getInitials(appointment.doctorName);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "VIDEO":
        return <Video className="h-4 w-4" />;
      default:
        return <MapPin className="h-4 w-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4 flex-1">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold">
                  {doctorInitials}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {appointment.doctorName}
                    </h3>
                    <p className="text-teal-600 font-medium">
                      {appointment.specialty}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {appointment.status === "CONFIRMED" && (
                        <>
                          <DropdownMenuItem>Add to Calendar</DropdownMenuItem>
                        </>
                      )}
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(appointment.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{appointment.time} (30 min)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {getTypeIcon(appointment.type)}
                    <span className="capitalize">
                      {appointment.type
                        .toLocaleLowerCase()
                        .split("_")
                        .join("-")}
                    </span>
                    {appointment.location && (
                      <span>• {appointment.location}</span>
                    )}
                  </div>
                </div>

                {appointment.notes && (
                  <p className="text-sm text-muted-foreground mb-4 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    {appointment.notes}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(appointment.status)}>
                      {capitalizeStatus(appointment.status)}
                    </Badge>
                    <span className="font-semibold text-teal-600">
                      {appointment.price} DT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
