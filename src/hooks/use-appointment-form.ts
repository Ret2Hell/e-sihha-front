import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  validateEmail,
  validatePhone,
  validatePrice,
  validateRequired,
  validateDate,
  sanitizeInput,
  formatPhoneNumber,
} from "@/lib/form-validation";
import {
  DEFAULT_APPOINTMENT_PRICE,
  FORM_VALIDATION_MESSAGES,
} from "@/constants/appointment-form";

export interface AppointmentFormData {
  patientId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: Date;
  time: string;
  type: "in-person" | "video";
  notes: string;
  price: string;
}

export interface AppointmentFormErrors {
  patientId?: string;
  patientName?: string;
  patientEmail?: string;
  patientPhone?: string;
  date?: string;
  time?: string;
  price?: string;
}

export interface UseAppointmentFormReturn {
  formData: AppointmentFormData;
  errors: AppointmentFormErrors;
  isSubmitting: boolean;
  isNewPatient: boolean;
  setIsNewPatient: (isNew: boolean) => void;
  updateFormData: (updates: Partial<AppointmentFormData>) => void;
  clearError: (field: keyof AppointmentFormErrors) => void;
  validateForm: () => boolean;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: AppointmentFormData = {
  patientId: "",
  patientName: "",
  patientEmail: "",
  patientPhone: "",
  date: new Date(),
  time: "",
  type: "in-person",
  notes: "",
  price: DEFAULT_APPOINTMENT_PRICE,
};

export function useAppointmentForm(): UseAppointmentFormReturn {
  const router = useRouter();
  const [formData, setFormData] =
    useState<AppointmentFormData>(initialFormData);
  const [errors, setErrors] = useState<AppointmentFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNewPatient, setIsNewPatient] = useState(false);

  const updateFormData = useCallback(
    (updates: Partial<AppointmentFormData>) => {
      // Sanitize string inputs
      const sanitizedUpdates = { ...updates };

      if (updates.patientName) {
        sanitizedUpdates.patientName = sanitizeInput(updates.patientName);
      }

      if (updates.patientEmail) {
        sanitizedUpdates.patientEmail = sanitizeInput(updates.patientEmail);
      }

      if (updates.patientPhone) {
        sanitizedUpdates.patientPhone = formatPhoneNumber(updates.patientPhone);
      }

      if (updates.notes) {
        sanitizedUpdates.notes = sanitizeInput(updates.notes);
      }

      setFormData((prev) => ({ ...prev, ...sanitizedUpdates }));
    },
    []
  );

  const clearError = useCallback((field: keyof AppointmentFormErrors) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: AppointmentFormErrors = {};

    // Patient validation
    if (!formData.patientId && !isNewPatient) {
      newErrors.patientId = FORM_VALIDATION_MESSAGES.SELECT_PATIENT;
    }

    if (isNewPatient) {
      if (!validateRequired(formData.patientName)) {
        newErrors.patientName = FORM_VALIDATION_MESSAGES.REQUIRED;
      }

      if (!validateRequired(formData.patientEmail)) {
        newErrors.patientEmail = FORM_VALIDATION_MESSAGES.REQUIRED;
      } else if (!validateEmail(formData.patientEmail)) {
        newErrors.patientEmail = FORM_VALIDATION_MESSAGES.INVALID_EMAIL;
      }

      if (!validateRequired(formData.patientPhone)) {
        newErrors.patientPhone = FORM_VALIDATION_MESSAGES.REQUIRED;
      } else if (!validatePhone(formData.patientPhone)) {
        newErrors.patientPhone = FORM_VALIDATION_MESSAGES.INVALID_PHONE;
      }
    }

    // Appointment validation
    if (!formData.date) {
      newErrors.date = FORM_VALIDATION_MESSAGES.SELECT_DATE;
    } else if (!validateDate(formData.date)) {
      newErrors.date = FORM_VALIDATION_MESSAGES.INVALID_DATE;
    }

    if (!formData.time) {
      newErrors.time = FORM_VALIDATION_MESSAGES.SELECT_TIME;
    }

    if (!validatePrice(formData.price)) {
      newErrors.price = FORM_VALIDATION_MESSAGES.INVALID_PRICE;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, isNewPatient]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);

      try {
        // Simulate API call - replace with actual API integration
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Appointment created:", {
          ...formData,
          isNewPatient,
        });

        // Reset form and redirect
        setFormData(initialFormData);
        setErrors({});
        router.push("/doctor/appointments");
      } catch (error) {
        console.error("Error creating appointment:", error);
        // In a real app, you'd show an error message to the user
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isNewPatient, validateForm, router]
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setIsNewPatient(false);
    setIsSubmitting(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    isNewPatient,
    setIsNewPatient,
    updateFormData,
    clearError,
    validateForm,
    handleSubmit,
    resetForm,
  };
}
