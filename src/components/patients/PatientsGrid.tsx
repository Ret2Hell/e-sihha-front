import { PatientCard } from "./PatientCard";
import React from "react";

export const PatientsGrid: React.FC<PatientsGridProps> = ({ patients }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {patients.map((patient, index) => (
        <PatientCard key={patient.id} patient={patient} index={index} />
      ))}
    </div>
  );
};
