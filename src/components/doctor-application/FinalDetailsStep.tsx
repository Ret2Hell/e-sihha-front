import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";
import { REQUIRED_DOCUMENTS } from "@/constants/doctor-application";

export function FinalDetailsStep({
  formData,
  onFormChange,
  onTermsChange,
}: FormStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onFormChange(name as keyof typeof formData, value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Final Details
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Please provide some additional information and upload required
          documents.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="bio">Professional Bio *</Label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write a brief professional bio that will be displayed on your profile"
            className="h-24"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="achievements">Professional Achievements</Label>
          <Textarea
            id="achievements"
            name="achievements"
            value={formData.achievements}
            onChange={handleChange}
            placeholder="List any notable achievements, publications, or awards"
            className="h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="motivation">Why do you want to join e-Sihha? *</Label>
          <Textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            placeholder="Tell us why you're interested in joining our platform"
            className="h-24"
            required
          />
        </div>

        <div className="space-y-4">
          <Label>Required Documents</Label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {REQUIRED_DOCUMENTS.map((doc) => (
              <div
                key={doc}
                className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center"
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm font-medium">{doc}</span>
                  <Button type="button" variant="outline" size="sm">
                    Upload File
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Note: Document upload is simulated in this demo. No files will be
            actually uploaded.
          </p>
        </div>

        <div className="pt-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={formData.termsAccepted}
              onCheckedChange={onTermsChange}
              required
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link
                  href="#"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Privacy Policy
                </Link>
              </Label>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By submitting this application, you confirm that all information
                provided is accurate and complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
