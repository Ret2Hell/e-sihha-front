import React from "react";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { CHAT_STYLES } from "@/constants/ai-symptom-checker";
import { formatMessageTime } from "@/lib/utils";

const ChatMessageComponent: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {isAssistant && (
        <div
          className={`${CHAT_STYLES.AVATAR_SIZE} rounded-full ${CHAT_STYLES.GRADIENT_PRIMARY} flex items-center justify-center flex-shrink-0`}
        >
          <Bot className="h-4 w-4 text-white" />
        </div>
      )}

      <div
        className={`rounded-lg p-3 ${
          isUser ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <p className="text-sm break-words max-w-72">{message.content}</p>
        <p className="text-xs opacity-70 mt-1">
          {formatMessageTime(message.timestamp)}
        </p>
      </div>

      {isUser && (
        <div
          className={`${CHAT_STYLES.AVATAR_SIZE} rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0`}
        >
          <User className="h-4 w-4 text-gray-600" />
        </div>
      )}
    </motion.div>
  );
};

export const ChatMessage = React.memo(ChatMessageComponent);
