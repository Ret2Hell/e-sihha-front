"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BackButton from "@/components/BackButton";
import { useDoctorApplicationForm } from "@/hooks/use-doctor-application-form";
import { useStepNavigation } from "@/hooks/use-step-navigation";
import {
  ProgressBar,
  PersonalInformationStep,
  ProfessionalInformationStep,
  EducationTrainingStep,
  SpecializationStep,
  PracticeDetailsStep,
  FinalDetailsStep,
  ApplicationSuccess,
} from "@/components/doctor-application";
import { Header } from "@/components/Header";
import React from "react";

export default function ApplyDoctorPage() {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    handleFormChange,
    handleCheckboxChange,
    handleRadioChange,
    handleSpecialtyChange,
    handleTermsChange,
    handleSubmit,
  } = useDoctorApplicationForm();

  const {
    currentStep,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    totalSteps,
  } = useStepNavigation();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit();
  };

  const renderCurrentStep = () => {
    const stepProps = {
      formData,
      onFormChange: handleFormChange,
      onCheckboxChange: handleCheckboxChange,
      onRadioChange: handleRadioChange,
      onSpecialtyChange: handleSpecialtyChange,
      onTermsChange: handleTermsChange,
    };

    switch (currentStep) {
      case 0:
        return <PersonalInformationStep {...stepProps} />;
      case 1:
        return <ProfessionalInformationStep {...stepProps} />;
      case 2:
        return <EducationTrainingStep {...stepProps} />;
      case 3:
        return <SpecializationStep {...stepProps} />;
      case 4:
        return <PracticeDetailsStep {...stepProps} />;
      case 5:
        return <FinalDetailsStep {...stepProps} />;
      default:
        return <PersonalInformationStep {...stepProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <BackButton href="/">Back to Home</BackButton>
          <Header
            title="Apply to Join e-Sihha as a Doctor"
            description="Complete the application form below to join our network of healthcare professionals. We'll review your information and get back to you within 3-5 business days."
          />
        </div>

        {!isSubmitted ? (
          <>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

            <Card className="border border-gray-200 dark:border-gray-800 shadow-sm">
              <CardContent className="pt-6">
                <form onSubmit={handleFormSubmit}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderCurrentStep()}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-8 flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={isFirstStep}
                      className="flex items-center gap-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </Button>

                    {!isLastStep ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 flex items-center gap-1"
                      >
                        Next
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting || !formData.termsAccepted}
                        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </>
        ) : (
          <ApplicationSuccess />
        )}
      </div>
    </div>
  );
}
