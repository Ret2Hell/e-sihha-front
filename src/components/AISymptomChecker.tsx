"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bot } from "lucide-react";
import { motion } from "framer-motion";
import { useAISymptomChecker } from "@/hooks/use-ai-symptom-checker";
import {
  ChatHeader,
  MessageList,
  ChatInput,
} from "@/components/ai-symptom-checker";
import { CHAT_STYLES } from "@/constants/ai-symptom-checker";

export default function AISymptomChecker() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    messages,
    inputMessage,
    setInputMessage,
    isLoading,
    scrollAreaRef,
    messagesEndRef,
    handleSendMessage,
    handleKeyPress,
  } = useAISymptomChecker();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Button
              size="lg"
              className={`${CHAT_STYLES.BUTTON_SIZE} rounded-full ${CHAT_STYLES.GRADIENT_PRIMARY} ${CHAT_STYLES.GRADIENT_HOVER} shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Bot className="h-6 w-6" />
            </Button>
          </motion.div>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          className={`${CHAT_STYLES.POPOVER_SIZE} p-0 mr-4 rounded-lg overflow-hidden shadow-2xl`}
          sideOffset={10}
        >
          <div className="h-full flex flex-col max-h-[600px]">
            <ChatHeader />
            <div className="flex-1 flex flex-col">
              <MessageList
                messages={messages}
                isLoading={isLoading}
                scrollAreaRef={scrollAreaRef}
                messagesEndRef={messagesEndRef}
              />
              <ChatInput
                inputMessage={inputMessage}
                setInputMessage={setInputMessage}
                onSendMessage={handleSendMessage}
                onKeyPress={handleKeyPress}
                isLoading={isLoading}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
