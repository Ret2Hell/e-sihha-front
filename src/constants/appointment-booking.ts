import { User, Video } from "lucide-react";
import React from "react";

export const TIME_SLOTS = [
  { time: "9:00 AM", available: true },
  { time: "9:30 AM", available: true },
  { time: "10:00 AM", available: false },
  { time: "10:30 AM", available: true },
  { time: "11:00 AM", available: true },
  { time: "11:30 AM", available: false },
  { time: "2:00 PM", available: true },
  { time: "2:30 PM", available: true },
  { time: "3:00 PM", available: true },
  { time: "3:30 PM", available: false },
  { time: "4:00 PM", available: true },
  { time: "4:30 PM", available: true },
];

export const CONSULTATION_TYPES = [
  {
    id: "in-person",
    name: "In-Person Visit",
    icon: React.createElement(User, { className: "h-5 w-5" }),
    description: "Visit the clinic for physical examination",
    duration: "30 minutes",
    price: 80,
  },
  {
    id: "video",
    name: "Video Consultation",
    icon: React.createElement(Video, { className: "h-5 w-5" }),
    description: "Online consultation via video call",
    duration: "30 minutes",
    price: 80,
  },
];

export const BOOKING_STEPS = [
  { number: 1, label: "Type", key: "consultation-type" },
  { number: 2, label: "Date", key: "date-selection" },
  { number: 3, label: "Time", key: "time-selection" },
  { number: 4, label: "Confirm", key: "confirmation" },
] as const;
