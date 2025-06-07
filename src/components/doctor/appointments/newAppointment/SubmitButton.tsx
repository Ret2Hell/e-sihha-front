"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SubmitButtonProps {
  isSubmitting: boolean;
  isValid: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SubmitButton({
  isSubmitting,
  isValid,
  onSubmit,
}: SubmitButtonProps) {
  return (
    <div className="md:col-span-2 flex justify-end">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full md:w-auto"
      >
        <Button
          type="submit"
          onClick={onSubmit}
          className="w-full md:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
          disabled={isSubmitting || !isValid}
        >
          {isSubmitting ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Creating Appointment...
            </>
          ) : (
            "Create Appointment"
          )}
        </Button>
      </motion.div>
    </div>
  );
}
