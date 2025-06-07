import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .slice(1)
    .map((n) => n[0])
    .join("");
};

export const getStatusColor = (status: AppointmentStatus): string => {
  const statusColors: Record<AppointmentStatus, string> = {
    pending: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
    upcoming: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    completed: "bg-green-100 text-green-700 hover:bg-green-200",
    cancelled: "bg-red-100 text-red-700 hover:bg-red-200",
    rescheduled: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
  };

  return statusColors[status] || "bg-gray-100 text-gray-700 hover:bg-gray-200";
};

export const getTypeIconName = (type: AppointmentType): string => {
  const typeIconNames: Record<AppointmentType, string> = {
    video: "Video",
    "in-person": "MapPin",
  };

  return typeIconNames[type];
};

export const capitalizeStatus = (status: string): string => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

export const getAppointmentStatusColor = (status: "confirmed" | "pending") => {
  return status === "confirmed"
    ? "bg-green-100 text-green-700 hover:bg-green-200"
    : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200";
};

export const generateInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

export const formatTimeDisplay = (time: string, duration: number): string => {
  return `${time} (${duration} min)`;
};

export const formatCurrency = (
  amount: number,
  currency: string = "DT"
): string => {
  return `${amount.toLocaleString()} ${currency}`;
};

export const calculateCompletionPercentage = (
  completed: number,
  total: number
): number => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

export const generateMessageId = (): string => {
  return uuidv4();
};

export const formatMessageTime = (timestamp: Date): string => {
  return timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const isValidMessage = (message: string): boolean => {
  return message.trim().length > 0 && message.trim().length <= 1000;
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/\s+/g, " ");
};
