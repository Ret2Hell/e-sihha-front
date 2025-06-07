import React from "react";
import { Bot } from "lucide-react";
import { CHAT_STYLES } from "@/constants/ai-symptom-checker";

export const ChatHeader: React.FC = () => {
  return (
    <div className={`${CHAT_STYLES.GRADIENT_PRIMARY} text-white p-6`}>
      <div className="flex items-center gap-2">
        <Bot className="h-5 w-5" />
        <div>
          <h3 className="text-lg font-semibold">AI Symptom Checker</h3>
          <p className="text-teal-100 text-sm">Get specialty recommendations</p>
        </div>
      </div>
    </div>
  );
};
