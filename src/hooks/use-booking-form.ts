import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { CONSULTATION_TYPES } from "@/constants/appointment-booking";

export function useBookingForm() {
  const router = useRouter();

  const [bookingState, setBookingState] = useState<BookingState>({
    selectedDate: new Date(),
    selectedTime: "",
    selectedType: "in-person",
    notes: "",
    isBooking: false,
    isBooked: false,
    currentStep: 1,
  });

  const selectedConsultationType = CONSULTATION_TYPES.find(
    (type: ConsultationType) => type.id === bookingState.selectedType
  );

  const totalPrice = selectedConsultationType?.price || 0;

  const updateBookingState = useCallback((updates: Partial<BookingState>) => {
    setBookingState((prev) => ({ ...prev, ...updates }));
  }, []);

  const nextStep = useCallback(() => {
    if (bookingState.currentStep < 4) {
      updateBookingState({ currentStep: bookingState.currentStep + 1 });
    }
  }, [bookingState.currentStep, updateBookingState]);

  const prevStep = useCallback(() => {
    if (bookingState.currentStep > 1) {
      updateBookingState({ currentStep: bookingState.currentStep - 1 });
    }
  }, [bookingState.currentStep, updateBookingState]);

  const canProceedToNextStep = useCallback(() => {
    switch (bookingState.currentStep) {
      case 1:
        return !!bookingState.selectedType;
      case 2:
        return !!bookingState.selectedDate;
      case 3:
        return !!bookingState.selectedTime;
      case 4:
        return true;
      default:
        return false;
    }
  }, [bookingState]);

  const handleBookAppointment = useCallback(async () => {
    if (!bookingState.selectedDate || !bookingState.selectedTime) return;

    updateBookingState({ isBooking: true });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    updateBookingState({ isBooking: false, isBooked: true });

    // Redirect to appointments page after 3 seconds
    setTimeout(() => {
      router.push("/user/appointments");
    }, 3000);
  }, [
    bookingState.selectedDate,
    bookingState.selectedTime,
    router,
    updateBookingState,
  ]);

  return {
    bookingState,
    updateBookingState,
    selectedConsultationType,
    totalPrice,
    nextStep,
    prevStep,
    canProceedToNextStep,
    handleBookAppointment,
  };
}
