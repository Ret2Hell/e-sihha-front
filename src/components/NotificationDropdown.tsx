"use client";

import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NotificationItem from "./NotificationItem";

export default function NotificationDropdown() {
  const notifications = [
    {
      title: "Appointment Reminder",
      message: "Your appointment with Dr. Smith is tomorrow at 10:00 AM",
      time: "10 minutes ago",
    },
    {
      title: "New Message",
      message: "Dr. Jones sent you a new message.",
      time: "1 hour ago",
    },
    {
      title: "Lab Results Ready",
      message: "Your lab results are now available.",
      time: "Yesterday",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-teal-500 text-[10px]">
            3
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.map((notification, i) => (
            <DropdownMenuItem key={i} asChild>
              <NotificationItem
                title={notification.title}
                message={notification.message}
                time={notification.time}
              />
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center text-center cursor-pointer">
          <span className="text-sm text-teal-600">View all notifications</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
