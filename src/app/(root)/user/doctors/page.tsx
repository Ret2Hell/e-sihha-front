"use client";

import React from "react";
import { doctors } from "@/data/doctors-data";
import { useDoctorsFilter } from "@/hooks/use-doctors-filter";
import {
  DoctorsHeader,
  DoctorsFilters,
  DoctorsGrid,
  EmptyDoctorsState,
} from "@/components/doctors";

const DoctorsPage = () => {
  const {
    searchTerm,
    selectedSpecialty,
    sortBy,
    filteredDoctors,
    hasActiveFilters,
    handleSearch,
    handleSpecialtyFilter,
    handleSort,
    clearFilters,
  } = useDoctorsFilter(doctors);

  return (
    <div className="space-y-6">
      <DoctorsHeader />

      <DoctorsFilters
        searchTerm={searchTerm}
        selectedSpecialty={selectedSpecialty}
        sortBy={sortBy}
        onSearch={handleSearch}
        onSpecialtyChange={handleSpecialtyFilter}
        onSortChange={handleSort}
      />

      {filteredDoctors.length > 0 ? (
        <DoctorsGrid doctors={filteredDoctors} />
      ) : (
        <EmptyDoctorsState
          onClearFilters={clearFilters}
          hasFilters={hasActiveFilters}
        />
      )}
    </div>
  );
};

export default DoctorsPage;
