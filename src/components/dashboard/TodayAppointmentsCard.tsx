"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  capitalizeStatus,
  generateInitials,
  getAppointmentStatusColor,
} from "@/lib/utils";
import React from "react";

export default function TodayAppointmentsCard({
  appointments,
}: TodayAppointmentsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Today&apos;s Appointments</CardTitle>
          <CardDescription>Your schedule for today</CardDescription>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/doctor/appointments">
            View All
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <motion.div
              key={appointment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex-shrink-0">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                    {generateInitials(appointment.patientName)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium truncate">
                    {appointment.patientName}
                  </h4>
                  <Badge
                    variant={
                      appointment.status === "CONFIRMED"
                        ? "default"
                        : "secondary"
                    }
                    className={getAppointmentStatusColor(appointment.status)}
                  >
                    {capitalizeStatus(appointment.status)}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{appointment.time}</span>
                  </div>
                  <span>•</span>
                  <span>
                    {appointment.type.toLocaleLowerCase().split("_").join("-")}
                  </span>
                  <span>•</span>
                  <span>30 min</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
