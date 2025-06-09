import { useState } from "react";
import { useApplyDoctorMutation } from "@/state/api";

const initialFormData: DoctorApplicationFormData = {
  // Personal Information
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",

  // Professional Information
  licenseNumber: "",
  licenseExpiryDate: "",
  yearsOfExperience: "",
  currentWorkplace: "",

  // Education & Training
  medicalSchool: "",
  graduationYear: "",
  residency: "",
  fellowship: "",
  certifications: "",

  // Specialization
  primarySpecialty: "",

  // Practice Details
  consultationFee: "",
  consultationTypes: [],
  availableDays: [],

  // Final Details
  bio: "",
  achievements: "",
  motivation: "",
  termsAccepted: false,
};

export function useDoctorApplicationForm() {
  const [formData, setFormData] =
    useState<DoctorApplicationFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applyDoctor] = useApplyDoctorMutation();

  const handleFormChange = (
    field: keyof DoctorApplicationFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[field as keyof typeof prev] as string[];

      if (currentValues.includes(value)) {
        return {
          ...prev,
          [field]: currentValues.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [field]: [...currentValues, value],
        };
      }
    });
  };

  const handleRadioChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSpecialtyChange = (specialty: string) => {
    if (formData.primarySpecialty === specialty) {
      setFormData((prev) => ({ ...prev, primarySpecialty: "" }));
    } else {
      setFormData((prev) => ({ ...prev, primarySpecialty: specialty }));
    }
  };

  const handleTermsChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termsAccepted: checked }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Test data for doctor application
      const testApplicationData = {
        name: "Dr. John Smith",
        email: "john.smith@exampleddd.com",
        specialty: "Cardiology",
        licenseNumber: "MD1234567855",
        phone: "+1-555-123-4567",
        address: "123 Medical Center Dr",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        qualifications: ["MD", "Board Certified in Cardiology"],
        bio: "Dr. Smith has over 10 years of experience in cardiology...",
        workingHours: {
          monday: {
            start: "09:00",
            end: "17:00",
          },
          tuesday: {
            start: "09:00",
            end: "17:00",
          },
          wednesday: {
            start: "09:00",
            end: "17:00",
          },
          thursday: {
            start: "09:00",
            end: "17:00",
          },
          friday: {
            start: "09:00",
            end: "17:00",
          },
          saturday: {
            start: "09:00",
            end: "17:00",
          },
          sunday: {
            start: "09:00",
            end: "17:00",
          },
        },
      };

      await applyDoctor(testApplicationData).unwrap();
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit doctor application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    isSubmitted,
    handleFormChange,
    handleCheckboxChange,
    handleRadioChange,
    handleSpecialtyChange,
    handleTermsChange,
    handleSubmit,
  };
}
