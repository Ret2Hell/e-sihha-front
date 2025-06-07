import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function EducationTrainingStep({
  formData,
  onFormChange,
}: FormStepProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onFormChange(name as keyof typeof formData, value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Education & Training
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Please provide details about your medical education and training.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="medicalSchool">Medical School *</Label>
          <Input
            id="medicalSchool"
            name="medicalSchool"
            value={formData.medicalSchool}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="graduationYear">Graduation Year *</Label>
          <Input
            id="graduationYear"
            name="graduationYear"
            type="number"
            min="1950"
            max={new Date().getFullYear()}
            value={formData.graduationYear}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="residency">Residency Program</Label>
          <Input
            id="residency"
            name="residency"
            value={formData.residency}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fellowship">Fellowship (if applicable)</Label>
          <Input
            id="fellowship"
            name="fellowship"
            value={formData.fellowship}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="certifications">Additional Certifications</Label>
          <Textarea
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            placeholder="List any additional certifications or qualifications"
            className="h-24"
          />
        </div>
      </div>
    </div>
  );
}
