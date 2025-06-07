import React from "react";
import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";

const SpecialtyRecommendationCardComponent: React.FC<
  SpecialtyRecommendationProps
> = ({ recommendation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-teal-50 rounded-lg p-4 border border-teal-200 mt-3"
    >
      <div className="flex items-center gap-2 mb-3">
        <Stethoscope className="h-4 w-4 text-teal-600" />
        <h4 className="font-semibold text-teal-800">Recommended Specialty</h4>
      </div>
      <div className="bg-white rounded-md p-3 border border-teal-100">
        <div className="flex items-center justify-between mb-1">
          <span className="font-medium text-gray-900">
            {recommendation.specialty}
          </span>
        </div>
        <p className="text-sm text-gray-600">{recommendation.reason}</p>
      </div>
    </motion.div>
  );
};

export const SpecialtyRecommendationCard = React.memo(
  SpecialtyRecommendationCardComponent
);
