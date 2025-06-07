"use client";

import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";
import NotFound from "@/components/NotFound";
import { usePatient } from "@/hooks/use-patient";
import { usePatientNotes } from "@/hooks/use-patient-notes";
import { PatientHeader, PatientTabs } from "@/components/patients";

export default function PatientDetailsPage() {
  const params = useParams();
  const patientId = params.id as string;
  const { patient } = usePatient(patientId);

  const {
    isEditingNotes,
    newNote,
    notes,
    handleStartEditing,
    handleAddNote,
    handleCancelEditing,
    setNewNote,
  } = usePatientNotes(patient?.medicalRecord.notes);

  if (!patient) {
    return (
      <NotFound
        title="Patient Not Found"
        backLink={{
          href: "/doctor/patients",
          text: "Back to Patients",
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <BackButton href="/doctor/patients">Back to Patients</BackButton>

      {/* Patient Header */}
      <PatientHeader patient={patient} />

      {/* Main Content Tabs */}
      <PatientTabs
        patient={patient}
        notesProps={{
          notes,
          isEditingNotes,
          newNote,
          onNewNoteChange: setNewNote,
          onStartEditing: handleStartEditing,
          onSaveNote: handleAddNote,
          onCancelEditing: handleCancelEditing,
        }}
      />
    </div>
  );
}
