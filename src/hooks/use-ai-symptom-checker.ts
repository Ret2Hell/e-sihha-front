import { useState, useRef, useEffect, useCallback } from "react";
import { AI_SYMPTOM_CHECKER_CONSTANTS } from "@/constants/ai-symptom-checker";
import { generateMessageId, isValidMessage, sanitizeInput } from "@/lib/utils";
import { useAiSymptomsCheckerMutation } from "@/state/api";

export const useAISymptomChecker = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: AI_SYMPTOM_CHECKER_CONSTANTS.INITIAL_MESSAGE.id,
      role: AI_SYMPTOM_CHECKER_CONSTANTS.INITIAL_MESSAGE.role,
      content: AI_SYMPTOM_CHECKER_CONSTANTS.INITIAL_MESSAGE.content,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [aiSymptomsChecker] = useAiSymptomsCheckerMutation();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, AI_SYMPTOM_CHECKER_CONSTANTS.SCROLL_DELAY);

    return () => clearTimeout(timer);
  }, [messages, isLoading, scrollToBottom]);

  const analyzeSymptoms = useCallback(
    async (
      symptoms: string
    ): Promise<{ recommendation: SpecialtyRecommendation }> => {
      try {
        const result = await aiSymptomsChecker(symptoms).unwrap();
        return {
          recommendation: {
            specialty: result.specialty || "General Practitioner",
            reason:
              result.reason ||
              "Based on your symptoms, a general practitioner would be the best starting point. They can evaluate your condition comprehensively and provide appropriate referrals to specialists if needed.",
          },
        };
      } catch (error) {
        console.error("API Error:", error);
        throw error;
      }
    },
    [aiSymptomsChecker]
  );

  const addMessage = useCallback(
    (message: Omit<Message, "timestamp" | "id">) => {
      const newMessage: Message = {
        ...message,
        id: generateMessageId(),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newMessage]);
      return newMessage.id;
    },
    []
  );

  const updateMessage = useCallback(
    (messageId: string, updates: Partial<Message>) => {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === messageId ? { ...msg, ...updates } : msg))
      );
    },
    []
  );

  const addErrorMessage = useCallback(() => {
    addMessage({
      role: "assistant",
      content: AI_SYMPTOM_CHECKER_CONSTANTS.ERROR_MESSAGE.content,
    });
  }, [addMessage]);

  const handleSendMessage = useCallback(async () => {
    const cleanInput = sanitizeInput(inputMessage);
    if (!cleanInput || !isValidMessage(cleanInput) || isLoading) return;

    const messageId = addMessage({
      role: "user",
      content: cleanInput,
    });

    setInputMessage("");
    setIsLoading(true);

    try {
      const analysis = await analyzeSymptoms(cleanInput);
      updateMessage(messageId, { recommendation: analysis.recommendation });
    } catch (error) {
      console.error("Error analyzing symptoms:", error);
      addErrorMessage();
    } finally {
      setIsLoading(false);
    }
  }, [
    inputMessage,
    isLoading,
    addMessage,
    analyzeSymptoms,
    updateMessage,
    addErrorMessage,
  ]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  return {
    messages,
    inputMessage,
    setInputMessage,
    isLoading,
    scrollAreaRef,
    messagesEndRef,
    handleSendMessage,
    handleKeyPress,
  };
};
