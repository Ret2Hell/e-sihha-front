import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CONSULTATION_TYPES, WEEK_DAYS } from "@/constants/doctor-application";

export function PracticeDetailsStep({
  formData,
  onFormChange,
  onCheckboxChange,
}: FormStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFormChange(name as keyof typeof formData, value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Practice Details
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Please provide details about your practice preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="consultationFee">Consultation Fee (DT) *</Label>
          <Input
            id="consultationFee"
            name="consultationFee"
            type="number"
            min="0"
            value={formData.consultationFee}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label className="mb-2 block">Consultation Types *</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {CONSULTATION_TYPES.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={`consultation-${type.toLowerCase()}`}
                  checked={formData.consultationTypes.includes(type)}
                  onCheckedChange={() =>
                    onCheckboxChange("consultationTypes", type)
                  }
                />
                <Label htmlFor={`consultation-${type.toLowerCase()}`}>
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label className="mb-2 block">Available Days *</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {WEEK_DAYS.map((day) => (
              <div key={day} className="flex items-center space-x-2">
                <Checkbox
                  id={`day-${day.toLowerCase()}`}
                  checked={formData.availableDays.includes(day)}
                  onCheckedChange={() => onCheckboxChange("availableDays", day)}
                />
                <Label htmlFor={`day-${day.toLowerCase()}`}>{day}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
