import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CurrentDiagnosis({ diagnosis }: CurrentDiagnosisProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Diagnosis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="font-semibold text-lg text-teal-600">
              {diagnosis.primary}
            </div>
            <div className="text-sm text-muted-foreground">
              ICD-10: {diagnosis.icd10} • Diagnosed:{" "}
              {new Date(diagnosis.date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface CurrentMedicationsProps {
  medications: Patient["medicalRecord"]["treatment"]["medications"];
}

export function CurrentMedications({ medications }: CurrentMedicationsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Medications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {medications.map((medication, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <div className="font-semibold">{medication.name}</div>
                <div className="text-sm text-muted-foreground">
                  {medication.dosage} • {medication.frequency}
                </div>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                Active
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
