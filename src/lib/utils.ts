import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
