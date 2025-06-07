import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const PatientCard: React.FC<PatientCardProps> = ({ patient, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                <AvatarFallback className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold">
                  {patient.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">
                  {patient.name}
                </CardTitle>
                <CardDescription>
                  {patient.age} years • {patient.gender}
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium">Condition</div>
              <div className="text-sm text-muted-foreground">
                {patient.condition}
              </div>
            </div>
            <div>
              <div className="font-medium">Total Visits</div>
              <div className="text-muted-foreground">{patient.totalVisits}</div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
              </span>
            </div>
            {patient.nextAppointment && (
              <div className="flex items-center gap-2 text-sm text-teal-600">
                <Calendar className="h-4 w-4" />
                <span>
                  Next: {new Date(patient.nextAppointment).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>

          <div className="flex gap-2 pt-2">
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={`/doctor/patients/${patient.id}`}>
                <FileText className="h-4 w-4 mr-2" />
                View Details
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
