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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Shield } from "lucide-react";

export default function ConfirmationStep({
  patientName,
  totalPrice,
  isBooking,
  onPatientNameChange,
  onConfirmBooking,
}: ConfirmationStepProps) {
  return (
    <motion.div
      key="confirmation"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl">Patient Information</CardTitle>
          <CardDescription>
            Please provide the patient&apos;s full name for the appointment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="patientName" className="text-base font-medium">
            Patient Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="patientName"
            placeholder="Enter patient's full name"
            value={patientName}
            onChange={(e) => onPatientNameChange(e.target.value)}
            className="mt-3"
            required
          />
        </CardContent>
      </Card>

      <Card className="shadow-xl border-0 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Ready to Book?</h3>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Secure Payment</span>
            </div>
          </div>
          <Button
            onClick={onConfirmBooking}
            disabled={isBooking}
            className="w-full bg-white text-teal-600 hover:bg-gray-50 h-14 text-lg font-semibold shadow-lg"
          >
            {isBooking ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-teal-600 mr-3"></div>
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="h-5 w-5 mr-3" />
                Confirm & Pay {totalPrice} DT
              </>
            )}
          </Button>
          <p className="text-xs text-center mt-3 text-teal-100">
            By booking this appointment, you agree to our terms and conditions
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
