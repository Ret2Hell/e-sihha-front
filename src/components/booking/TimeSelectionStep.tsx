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

export default function TimeSelectionStep({
  selectedTime,
  selectedDate,
  onTimeSelect,
}: TimeSelectionStepProps) {
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
            {TIME_SLOTS.map((slot: TimeSlot) => (
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
