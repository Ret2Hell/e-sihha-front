import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProfessionalInformationStep({
  formData,
  onFormChange,
}: FormStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFormChange(name as keyof typeof formData, value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Professional Information
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Please provide details about your medical license and professional
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="licenseNumber">Medical License Number *</Label>
          <Input
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="licenseExpiryDate">License Expiry Date *</Label>
          <Input
            id="licenseExpiryDate"
            name="licenseExpiryDate"
            type="date"
            value={formData.licenseExpiryDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
          <Input
            id="yearsOfExperience"
            name="yearsOfExperience"
            type="number"
            min="0"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentWorkplace">Current Workplace *</Label>
          <Input
            id="currentWorkplace"
            name="currentWorkplace"
            value={formData.currentWorkplace}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
}
