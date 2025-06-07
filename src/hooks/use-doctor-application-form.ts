import { useState } from "react";

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

    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        resolve();
      }, 2000);
    });
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
