"use client";

import React from "react";
import { useGetDoctorsQuery } from "@/state/api";
import { useDoctorsFilter } from "@/hooks/use-doctors-filter";
import {
  DoctorsHeader,
  DoctorsFilters,
  DoctorsGrid,
  EmptyDoctorsState,
} from "@/components/doctors";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const DoctorsPage = () => {
  const { data: doctors = [], isLoading, error } = useGetDoctorsQuery({});

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

  if (isLoading) {
    return (
      <div className="space-y-6">
        <DoctorsHeader />
        <Card>
          <CardContent className="p-12 text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-teal-600" />
            <p className="text-muted-foreground">Loading doctors...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <DoctorsHeader />
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-red-600 mb-4">Failed to load doctors</p>
            <p className="text-muted-foreground">
              Please try refreshing the page
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

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
