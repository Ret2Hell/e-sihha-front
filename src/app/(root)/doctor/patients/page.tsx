"use client";

import { patients } from "@/data/patients-data";
import { usePatientsFilter } from "@/hooks/use-patients-filter";
import {
  PatientsHeader,
  PatientsFilters,
  PatientsGrid,
  EmptyPatientsState,
} from "@/components/patients";
import React from "react";

export default function DoctorPatientsPage() {
  const {
    searchTerm,
    sortBy,
    filteredPatients,
    hasActiveFilters,
    handleSearch,
    handleSort,
    clearFilters,
  } = usePatientsFilter(patients);

  return (
    <div className="space-y-6">
      <PatientsHeader
        title="My Patients"
        description="Manage and view your patient records"
      />

      <PatientsFilters
        searchTerm={searchTerm}
        sortBy={sortBy}
        onSearch={handleSearch}
        onSortChange={handleSort}
      />

      {filteredPatients.length > 0 ? (
        <PatientsGrid patients={filteredPatients} />
      ) : (
        <EmptyPatientsState
          onClearFilters={clearFilters}
          hasFilters={hasActiveFilters}
        />
      )}
    </div>
  );
}
