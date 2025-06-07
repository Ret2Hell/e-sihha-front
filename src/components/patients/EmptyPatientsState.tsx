import { Button } from "@/components/ui/button";
import React from "react";

export const EmptyPatientsState: React.FC<EmptyPatientsStateProps> = ({
  onClearFilters,
  hasFilters,
}) => {
  return (
    <div className="text-center py-12">
      <div className="text-muted-foreground mb-4">
        {hasFilters
          ? "No patients found matching your criteria"
          : "No patients found"}
      </div>
      {hasFilters && (
        <Button variant="outline" onClick={onClearFilters}>
          Clear Filters
        </Button>
      )}
    </div>
  );
};
