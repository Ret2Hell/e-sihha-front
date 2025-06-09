import React from "react";
import { DoctorCard } from "./DoctorCard";

export const DoctorsGrid: React.FC<DoctorsGridProps> = ({ doctors }) => {
  console.log("DoctorsGrid rendered with doctors:", doctors);
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doctor, index) => (
        <DoctorCard key={doctor.id} doctor={doctor} index={index} />
      ))}
    </div>
  );
};
