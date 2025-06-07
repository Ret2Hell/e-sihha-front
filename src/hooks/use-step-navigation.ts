import { useState } from "react";
import { APPLICATION_STEPS } from "@/constants/doctor-application";

export function useStepNavigation() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < APPLICATION_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === APPLICATION_STEPS.length - 1;

  return {
    currentStep,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    totalSteps: APPLICATION_STEPS.length,
  };
}
