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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CreditCard, Shield } from "lucide-react";

export default function ConfirmationStep({
  notes,
  totalPrice,
  isBooking,
  onNotesChange,
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
          <CardTitle className="text-2xl">Additional Information</CardTitle>
          <CardDescription>
            Any specific concerns or symptoms you&apos;d like to discuss?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="notes" className="text-base font-medium">
            Notes (Optional)
          </Label>
          <Textarea
            id="notes"
            placeholder="Describe your symptoms, medical history, or any specific concerns you'd like to discuss during the consultation..."
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            className="mt-3 min-h-[120px] resize-none"
            rows={5}
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
