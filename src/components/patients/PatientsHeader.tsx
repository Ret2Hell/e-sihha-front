import { Header } from "../Header";
import React from "react";

export const PatientsHeader: React.FC<PatientsHeaderProps> = ({
  title = "My Patients",
  description = "Manage and view your patient records",
  children,
}) => {
  return (
    <Header title={title} description={description}>
      {children}
    </Header>
  );
};
