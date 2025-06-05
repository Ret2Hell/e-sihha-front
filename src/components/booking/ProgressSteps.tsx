"use client";

import { motion } from "framer-motion";
import { BOOKING_STEPS } from "@/constants/appointment-booking";

export default function ProgressSteps({ currentStep }: ProgressStepsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-8"
    >
      <div className="flex items-center justify-center space-x-4 mb-8">
        {BOOKING_STEPS.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                step.number <= currentStep
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step.number}
            </div>
            {index < BOOKING_STEPS.length - 1 && (
              <div
                className={`w-16 h-1 mx-2 transition-all duration-300 ${
                  step.number < currentStep
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-16 text-sm text-muted-foreground">
        {BOOKING_STEPS.map((step) => (
          <span
            key={step.key}
            className={
              currentStep >= step.number ? "text-teal-600 font-medium" : ""
            }
          >
            {step.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
