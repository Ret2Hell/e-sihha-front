import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MEDICAL_SPECIALTIES } from "@/constants/doctor-application";

export function SpecializationStep({
  formData,
  onSpecialtyChange,
}: FormStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Specialization
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Select your primary specialty
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="mb-2 block">Primary Specialty *</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {MEDICAL_SPECIALTIES.map((specialty) => (
              <Button
                key={specialty}
                type="button"
                variant={
                  formData.primarySpecialty === specialty
                    ? "default"
                    : "outline"
                }
                className={`justify-start h-auto py-2 px-3 ${
                  formData.primarySpecialty === specialty
                    ? "bg-teal-500 hover:bg-teal-600 text-white"
                    : ""
                }`}
                onClick={() => onSpecialtyChange(specialty)}
              >
                {specialty}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Selected Specialties:
          </h3>
          <div className="flex flex-wrap gap-2">
            {formData.primarySpecialty && (
              <Badge variant="default" className="bg-teal-500">
                {formData.primarySpecialty}
              </Badge>
            )}

            {!formData.primarySpecialty && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                No specialties selected
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
