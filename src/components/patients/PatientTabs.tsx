import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CurrentDiagnosis,
  CurrentMedications,
  InsuranceCard,
  QuickActionsCard,
  DoctorNotes,
  SharedAccess,
  LabResults,
  AppointmentsHistory,
} from "@/components/patients";

export default function PatientTabs({ patient, notesProps }: PatientTabsProps) {
  return (
    <Tabs defaultValue="overview" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="medical-record">Medical Record</TabsTrigger>
        <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
        <TabsTrigger value="appointments">Appointments</TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview" className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Patient Info */}
          <div className="lg:col-span-2 space-y-6">
            <CurrentDiagnosis diagnosis={patient.medicalRecord.diagnosis} />
            <CurrentMedications
              medications={patient.medicalRecord.treatment.medications}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <InsuranceCard insurance={patient.insurance} />
            <QuickActionsCard />
          </div>
        </div>
      </TabsContent>

      {/* Medical Record Tab */}
      <TabsContent value="medical-record" className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DoctorNotes {...notesProps} />
          </div>
          <div>
            <SharedAccess
              sharedWithDoctors={patient.medicalRecord.sharedWithDoctors}
            />
          </div>
        </div>
      </TabsContent>

      {/* Lab Results Tab */}
      <TabsContent value="lab-results" className="space-y-6">
        <LabResults labResults={patient.medicalRecord.labResults} />
      </TabsContent>

      {/* Appointments Tab */}
      <TabsContent value="appointments" className="space-y-6">
        <AppointmentsHistory appointments={patient.appointments} />
      </TabsContent>
    </Tabs>
  );
}
