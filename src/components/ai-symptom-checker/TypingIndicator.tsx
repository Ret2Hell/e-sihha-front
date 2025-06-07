import React from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import {
  CHAT_STYLES,
  AI_SYMPTOM_CHECKER_CONSTANTS,
} from "@/constants/ai-symptom-checker";

export const TypingIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-3 justify-start"
    >
      <div
        className={`${CHAT_STYLES.AVATAR_SIZE} rounded-full ${CHAT_STYLES.GRADIENT_PRIMARY} flex items-center justify-center`}
      >
        <Bot className="h-4 w-4 text-white" />
      </div>
      <div className="bg-gray-100 rounded-lg p-3">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{
              animationDelay:
                AI_SYMPTOM_CHECKER_CONSTANTS.ANIMATION_DELAYS.DOT_1,
            }}
          />
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{
              animationDelay:
                AI_SYMPTOM_CHECKER_CONSTANTS.ANIMATION_DELAYS.DOT_2,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
