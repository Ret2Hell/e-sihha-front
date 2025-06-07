"use client";

import { useAppointmentForm } from "@/hooks/use-appointment-form";

import BackButton from "@/components/BackButton";
import React from "react";
import {
  AppointmentDetails,
  NewAppointmentHeader,
  PatientSelection,
  SubmitButton,
} from "@/components/doctor/appointments/newAppointment";

export default function NewAppointmentPage() {
  const {
    formData,
    errors,
    isSubmitting,
    isNewPatient,
    setIsNewPatient,
    updateFormData,
    clearError,
    handleSubmit,
  } = useAppointmentForm();

  const isFormValid = () => {
    // Quick validation check without setting errors
    if (!formData.patientId && !isNewPatient) return false;
    if (
      isNewPatient &&
      (!formData.patientName ||
        !formData.patientEmail ||
        !formData.patientPhone)
    )
      return false;
    if (!formData.date || !formData.time || !formData.price) return false;
    return true;
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <BackButton href="/doctor/appointments">Back to Appointments</BackButton>

      {/* Header */}
      <NewAppointmentHeader />

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Patient Selection */}
          <PatientSelection
            formData={formData}
            errors={errors}
            isNewPatient={isNewPatient}
            onIsNewPatientChange={setIsNewPatient}
            onFormDataChange={updateFormData}
            onClearError={clearError}
          />

          {/* Appointment Details */}
          <AppointmentDetails
            formData={formData}
            errors={errors}
            onFormDataChange={updateFormData}
            onClearError={clearError}
          />

          {/* Submit Button */}
          <SubmitButton
            isSubmitting={isSubmitting}
            isValid={isFormValid()}
            onSubmit={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
