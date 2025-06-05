"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CONSULTATION_TYPES } from "@/constants/appointment-booking";

export default function ConsultationTypeStep({
  selectedType,
  onTypeSelect,
}: ConsultationTypeStepProps) {
  return (
    <motion.div
      key="consultation-type"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl">Choose Consultation Type</CardTitle>
          <CardDescription>
            Select how you&apos;d like to consult with the doctor
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {CONSULTATION_TYPES.map((type: ConsultationType) => (
            <motion.div
              key={type.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selectedType === type.id
                  ? "border-teal-500 bg-gradient-to-r from-teal-50 to-cyan-50 shadow-lg"
                  : "border-gray-200 hover:border-teal-300 hover:shadow-md"
              }`}
              onClick={() => onTypeSelect(type.id)}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    selectedType === type.id
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {type.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{type.name}</h3>
                    <div className="text-right">
                      <div className="text-xl font-bold text-teal-600">
                        {type.price} DT
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {type.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
