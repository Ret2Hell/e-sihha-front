import React from "react";
import { Button } from "@/components/ui/button";
import { SearchX, RefreshCw } from "lucide-react";

export const EmptyDoctorsState: React.FC<EmptyDoctorsStateProps> = ({
  onClearFilters,
  hasFilters,
}) => {
  return (
    <div className="text-center py-16">
      <div className="flex justify-center mb-6">
        <div className="bg-muted rounded-full p-4">
          <SearchX className="size-8 text-muted-foreground" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">No Doctors Found</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        {hasFilters
          ? "We couldn't find any doctors matching your current search criteria. Try adjusting your filters or search terms."
          : "We're currently working on adding qualified healthcare professionals to our platform. Please check back soon for available doctors."}
      </p>
      {hasFilters && (
        <Button variant="outline" onClick={onClearFilters}>
          <RefreshCw className="size-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  );
};
