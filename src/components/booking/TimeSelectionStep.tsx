"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TIME_SLOTS } from "@/constants/appointment-booking";
import { useGetAppointmentsByDateAndDoctorQuery } from "@/state/api";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { Loader2 } from "lucide-react";

export default function TimeSelectionStep({
  selectedTime,
  selectedDate,
  onTimeSelect,
}: TimeSelectionStepProps) {
  const params = useParams();
  const doctorId = params.id as string;
  const formattedDate = selectedDate
    ? `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1
      ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`
    : undefined;

  const { data: existingAppointments, isLoading } =
    useGetAppointmentsByDateAndDoctorQuery(
      {
        date: formattedDate || "",
        doctorId,
      },
      {
        skip: !formattedDate || !doctorId,
      }
    );

  // Calculate available time slots by checking against confirmed appointments
  const availableTimeSlots = useMemo(() => {
    if (!existingAppointments) {
      return TIME_SLOTS;
    }

    // Get confirmed appointment times for the selected date
    const confirmedTimes = existingAppointments
      .filter((appointment: Appointment) => appointment.status === "CONFIRMED")
      .map((appointment: Appointment) => appointment.time);

    // Update time slots availability
    return TIME_SLOTS.map((slot) => ({
      ...slot,
      available: !confirmedTimes.includes(slot.time),
    }));
  }, [existingAppointments]);

  if (isLoading) {
    return (
      <motion.div
        key="time-selection"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">Select Time</CardTitle>
            <CardDescription>
              Loading available time slots for{" "}
              {selectedDate?.toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="time-selection"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl">Select Time</CardTitle>
          <CardDescription>
            Available time slots for {selectedDate?.toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {availableTimeSlots.map((slot: TimeSlot) => (
              <motion.div
                key={slot.time}
                whileHover={slot.available ? { scale: 1.05 } : {}}
                whileTap={slot.available ? { scale: 0.95 } : {}}
              >
                <Button
                  variant={selectedTime === slot.time ? "default" : "outline"}
                  disabled={!slot.available}
                  className={`w-full h-12 text-sm font-medium transition-all duration-300 ${
                    selectedTime === slot.time
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg"
                      : slot.available
                      ? "hover:border-teal-300 hover:bg-teal-50"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => slot.available && onTimeSelect(slot.time)}
                >
                  {slot.time}
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
