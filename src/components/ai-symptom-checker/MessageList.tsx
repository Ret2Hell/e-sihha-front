import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence } from "framer-motion";
import { ChatMessage } from "./ChatMessage";
import { SpecialtyRecommendationCard } from "./SpecialtyRecommendationCard";
import { TypingIndicator } from "./TypingIndicator";
import { CHAT_STYLES } from "@/constants/ai-symptom-checker";

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  isLoading,
  scrollAreaRef,
  messagesEndRef,
}) => {
  return (
    <ScrollArea
      ref={scrollAreaRef}
      className={`${CHAT_STYLES.SCROLL_AREA_HEIGHT} p-4`}
    >
      <div className="space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <div key={message.id}>
              <ChatMessage message={message} />

              {/* Show recommendations after user messages */}
              {message.role === "user" && message.recommendation && (
                <SpecialtyRecommendationCard
                  recommendation={message.recommendation}
                />
              )}
            </div>
          ))}
        </AnimatePresence>

        {isLoading && <TypingIndicator />}
      </div>
      {/* Invisible element to scroll to */}
      <div ref={messagesEndRef} />
    </ScrollArea>
  );
};
