"use client";

import { useState, useCallback, useMemo } from "react";

export const usePatientsFilter = (initialPatients: Patient[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<PatientSortOption>("name");

  const filteredPatients = useMemo(() => {
    const filtered = initialPatients.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "lastVisit":
          return (
            new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime()
          );
        case "age":
          return b.age - a.age;
        case "visits":
          return b.totalVisits - a.totalVisits;
        default:
          return 0;
      }
    });
  }, [initialPatients, searchTerm, sortBy]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleSort = useCallback((sort: string) => {
    setSortBy(sort as PatientSortOption);
  }, []);

  const clearFilters = useCallback(() => {
    setSearchTerm("");
    setSortBy("name");
  }, []);

  const hasActiveFilters = useMemo(() => {
    return searchTerm !== "";
  }, [searchTerm]);

  return {
    searchTerm,
    sortBy,
    filteredPatients,
    hasActiveFilters,
    handleSearch,
    handleSort,
    clearFilters,
  };
};
