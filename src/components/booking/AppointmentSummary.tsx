"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Shield, Video, User, CalendarIcon, Clock } from "lucide-react";
import { CONSULTATION_TYPES } from "@/constants/appointment-booking";
import { getInitials } from "@/lib/utils";

export default function AppointmentSummary({
  doctor,
  selectedType,
  selectedDate,
  selectedTime,
  totalPrice,
}: AppointmentSummaryProps) {
  const selectedConsultationType = CONSULTATION_TYPES.find(
    (type: ConsultationType) => type.id === selectedType
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="sticky top-6"
    >
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">Appointment Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Doctor Info */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
            <Avatar className="h-16 w-16 border-2 border-white shadow-md">
              <AvatarFallback className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-lg font-semibold">
                {getInitials(doctor.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{doctor.name}</h3>
              <p className="text-teal-600 font-medium">{doctor.specialty}</p>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Appointment Details</h4>

            {selectedType && (
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">Type</span>
                </div>
                <span className="capitalize">
                  {selectedType.replace("-", " ")}
                </span>
              </div>
            )}

            {selectedDate && (
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="font-medium">Date</span>
                </div>
                <span>{selectedDate.toLocaleDateString()}</span>
              </div>
            )}

            {selectedTime && (
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Time</span>
                </div>
                <span>{selectedTime}</span>
              </div>
            )}

            {selectedConsultationType && (
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Duration</span>
                </div>
                <span>{selectedConsultationType.duration}</span>
              </div>
            )}

            {selectedType !== "in-person" && (
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 text-blue-700 mb-1">
                  <Video className="h-4 w-4" />
                  <span className="font-medium text-sm">
                    Online Consultation
                  </span>
                </div>
                <p className="text-xs text-blue-600">
                  You&apos;ll receive a meeting link via email before your
                  appointment
                </p>
              </div>
            )}
          </div>

          {/* Pricing */}
          <div className="border-t pt-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Consultation Fee</span>
                <span>{totalPrice} DT</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Platform Fee</span>
                <span>0 DT</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                <span>Total</span>
                <span className="text-teal-600">{totalPrice} DT</span>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
            <Shield className="h-5 w-5 text-green-600" />
            <div>
              <div className="text-sm font-medium text-green-800">
                Secure & Confidential
              </div>
              <div className="text-xs text-green-600">
                Your data is protected with end-to-end encryption
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
