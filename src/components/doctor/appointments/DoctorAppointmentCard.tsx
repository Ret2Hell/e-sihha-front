"use client";

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
import {
  Calendar,
  Clock,
  Video,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  User,
} from "lucide-react";

const getStatusColor = (status: string) => {
  switch (status) {
    case "CONFIRMED":
      return "bg-green-100 text-green-700 hover:bg-green-200";
    case "COMPLETED":
      return "bg-gray-100 text-gray-700 hover:bg-gray-200";
    case "CANCELLED":
      return "bg-red-100 text-red-700 hover:bg-red-200";
    case "PENDING":
      return "bg-yellow-100 text-yellow-700 hover:bg-yellow-200";
    default:
      return "bg-gray-100 text-gray-700 hover:bg-gray-200";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return <Video className="h-4 w-4" />;
    default:
      return <User className="h-4 w-4" />;
  }
};

export default function DoctorAppointmentCard({
  appointment,
  index,
  onStatusChange,
}: DoctorAppointmentCardProps) {
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
                  {appointment.patientName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {appointment.patientName}
                    </h3>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {appointment.status === "PENDING" && (
                        <>
                          <DropdownMenuItem
                            onClick={() =>
                              onStatusChange(appointment.id, "CONFIRMED")
                            }
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Confirm
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              onStatusChange(appointment.id, "CANCELLED")
                            }
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Cancel
                          </DropdownMenuItem>
                        </>
                      )}
                      {appointment.status === "CONFIRMED" && (
                        <>
                          <DropdownMenuItem
                            onClick={() =>
                              onStatusChange(appointment.id, "COMPLETED")
                            }
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Mark Complete
                          </DropdownMenuItem>
                        </>
                      )}
                      <DropdownMenuItem>View Patient Details</DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(appointment.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>
                      {appointment.time} ({appointment.duration} min)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {getTypeIcon(appointment.type)}
                    <span className="capitalize">{appointment.type}</span>
                    {appointment.location && (
                      <span>• {appointment.location}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-teal-600">
                      {appointment.price} DT
                    </span>
                  </div>
                </div>

                {appointment.notes && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm font-medium text-blue-800 mb-1">
                      Notes:
                    </div>
                    <div className="text-sm text-blue-700">
                      {appointment.notes}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status.charAt(0).toUpperCase() +
                      appointment.status.slice(1)}
                  </Badge>

                  {appointment.status === "CONFIRMED" && (
                    <div className="flex gap-2">
                      {appointment.type === "video" && (
                        <Button size="sm" variant="outline">
                          <Video className="h-4 w-4 mr-2" />
                          Start Call
                        </Button>
                      )}
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                        onClick={() =>
                          onStatusChange(appointment.id, "COMPLETED")
                        }
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Complete
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
