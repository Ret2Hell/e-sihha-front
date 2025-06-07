import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import {
  AI_SYMPTOM_CHECKER_CONSTANTS,
  CHAT_STYLES,
} from "@/constants/ai-symptom-checker";

export const ChatInput: React.FC<ChatInputProps> = ({
  inputMessage,
  setInputMessage,
  onSendMessage,
  onKeyPress,
  isLoading,
}) => {
  return (
    <div className="p-4 border-t">
      <div className="flex gap-2">
        <Input
          placeholder={AI_SYMPTOM_CHECKER_CONSTANTS.PLACEHOLDER_TEXT}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={onKeyPress}
          disabled={isLoading}
          className="flex-1"
        />
        <Button
          onClick={onSendMessage}
          disabled={!inputMessage.trim() || isLoading}
          size="sm"
          className={`${CHAT_STYLES.GRADIENT_PRIMARY} ${CHAT_STYLES.GRADIENT_HOVER}`}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        {AI_SYMPTOM_CHECKER_CONSTANTS.DISCLAIMER_TEXT}
      </p>
    </div>
  );
};
