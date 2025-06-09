import { useState, useCallback, useMemo } from "react";

export const useDoctorsFilter = (initialDoctors: Doctor[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [sortBy, setSortBy] = useState<SortOption>("experience");

  const filteredDoctors = useMemo(() => {
    const filtered = initialDoctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSpecialty =
        selectedSpecialty === "All Specialties" ||
        doctor.specialty === selectedSpecialty;

      return matchesSearch && matchesSpecialty;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "experience":
          return b.experience - a.experience;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }, [initialDoctors, searchTerm, selectedSpecialty, sortBy]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleSpecialtyFilter = useCallback((specialty: string) => {
    setSelectedSpecialty(specialty);
  }, []);

  const handleSort = useCallback((sort: string) => {
    setSortBy(sort as SortOption);
  }, []);

  const clearFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedSpecialty("All Specialties");
    setSortBy("experience");
  }, []);

  const hasActiveFilters = useMemo(() => {
    return searchTerm !== "" || selectedSpecialty !== "All Specialties";
  }, [searchTerm, selectedSpecialty]);

  return {
    searchTerm,
    selectedSpecialty,
    sortBy,
    filteredDoctors,
    hasActiveFilters,
    handleSearch,
    handleSpecialtyFilter,
    handleSort,
    clearFilters,
  };
};
