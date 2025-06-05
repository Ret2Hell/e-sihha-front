"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useDoctor } from "@/hooks/use-doctor";
import { useBookingForm } from "@/hooks/use-booking-form";
import NotFound from "@/components/NotFound";
import {
  ProgressSteps,
  ConsultationTypeStep,
  DateSelectionStep,
  TimeSelectionStep,
  ConfirmationStep,
  AppointmentSummary,
  BookingSuccess,
} from "@/components/booking";

const BookAppointmentPage = () => {
  const params = useParams();
  const doctorId = params.id as string;
  const { doctor } = useDoctor(doctorId);

  const {
    bookingState,
    updateBookingState,
    totalPrice,
    nextStep,
    prevStep,
    canProceedToNextStep,
    handleBookAppointment,
  } = useBookingForm();

  if (!doctor) {
    return (
      <NotFound
        title="Doctor Not Found"
        backLink={{
          href: "/user/doctors",
          text: "Back to Doctors",
        }}
      />
    );
  }

  if (bookingState.isBooked) {
    return (
      <BookingSuccess
        doctor={doctor}
        selectedDate={bookingState.selectedDate}
        selectedTime={bookingState.selectedTime}
        selectedType={bookingState.selectedType}
        totalPrice={totalPrice}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button variant="ghost" asChild className="hover:bg-white/50">
            <Link href={`/user/doctors/${doctorId}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Profile
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            Book Your Appointment
          </h1>
          <p className="text-lg text-muted-foreground">
            Schedule your consultation with {doctor.name}
          </p>
        </motion.div>

        {/* Progress Steps */}
        <ProgressSteps currentStep={bookingState.currentStep} />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* Step 1: Consultation Type */}
              {bookingState.currentStep === 1 && (
                <ConsultationTypeStep
                  selectedType={bookingState.selectedType}
                  onTypeSelect={(type) =>
                    updateBookingState({ selectedType: type })
                  }
                />
              )}

              {/* Step 2: Date Selection */}
              {bookingState.currentStep === 2 && (
                <DateSelectionStep
                  selectedDate={bookingState.selectedDate}
                  onDateSelect={(date) =>
                    updateBookingState({ selectedDate: date })
                  }
                />
              )}

              {/* Step 3: Time Selection */}
              {bookingState.currentStep === 3 && (
                <TimeSelectionStep
                  selectedTime={bookingState.selectedTime}
                  selectedDate={bookingState.selectedDate}
                  onTimeSelect={(time) =>
                    updateBookingState({ selectedTime: time })
                  }
                />
              )}

              {/* Step 4: Notes and Confirmation */}
              {bookingState.currentStep === 4 && (
                <ConfirmationStep
                  notes={bookingState.notes}
                  totalPrice={totalPrice}
                  isBooking={bookingState.isBooking}
                  onNotesChange={(notes) => updateBookingState({ notes })}
                  onConfirmBooking={handleBookAppointment}
                />
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={bookingState.currentStep === 1}
                className="px-8 py-3"
              >
                Previous
              </Button>
              {bookingState.currentStep !== 4 && (
                <Button
                  onClick={nextStep}
                  disabled={!canProceedToNextStep()}
                  className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                >
                  Next
                </Button>
              )}
            </div>
          </div>

          {/* Appointment Summary */}
          <div className="lg:col-span-1">
            <AppointmentSummary
              doctor={doctor}
              selectedType={bookingState.selectedType}
              selectedDate={bookingState.selectedDate}
              selectedTime={bookingState.selectedTime}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
