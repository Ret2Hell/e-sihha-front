"use client";

import { Bell } from "lucide-react";

interface NotificationItemProps {
  title: string;
  message: string;
  time: string;
}

export default function NotificationItem({
  title,
  message,
  time,
}: NotificationItemProps) {
  return (
    <div className="flex items-start gap-3 py-3 cursor-pointer">
      <div className="h-9 w-9 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
        <Bell className="h-4 w-4 text-teal-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{message}</p>
        <p className="text-xs text-gray-400 mt-2">{time}</p>
      </div>
    </div>
  );
}
