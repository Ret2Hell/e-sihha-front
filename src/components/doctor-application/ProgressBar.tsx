import { APPLICATION_STEPS } from "@/constants/doctor-application";

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
        <span>
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span>{Math.round(progressPercentage)}% Complete</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-2">
        {APPLICATION_STEPS.map((step, index) => (
          <div
            key={index}
            className={`text-xs ${
              index <= currentStep
                ? "text-teal-600 dark:text-teal-400"
                : "text-gray-400 dark:text-gray-500"
            } ${
              index === 0
                ? "text-left"
                : index === APPLICATION_STEPS.length - 1
                ? "text-right"
                : "text-center"
            }`}
            style={{ width: `${100 / APPLICATION_STEPS.length}%` }}
          >
            {index === currentStep ? step : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
