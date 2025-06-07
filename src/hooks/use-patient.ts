import { patients } from "@/data/patients-data";
import { useMemo } from "react";

export function usePatient(patientId: string) {
  const patient = useMemo(
    () => patients.find((patient) => patient.id === patientId),
    [patientId]
  );

  return {
    patient,
    isLoading: false,
    error: null,
  };
}
