export const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

export const UNAVAILABLE_TIME_SLOTS = ["10:00 AM", "11:30 AM", "3:00 PM"];

export const APPOINTMENT_TYPES = [
  {
    id: "in-person" as const,
    label: "In-Person",
    description: "Visit the clinic for physical examination",
  },
  {
    id: "video" as const,
    label: "Video",
    description: "Online consultation via video call",
  },
] as const;

export const DEFAULT_APPOINTMENT_PRICE = "150";

export const FORM_VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Please enter a valid email address",
  INVALID_PHONE: "Please enter a valid phone number",
  INVALID_PRICE: "Please enter a valid price",
  INVALID_DATE: "Please select a future date",
  SELECT_PATIENT: "Please select a patient",
  SELECT_DATE: "Please select a date",
  SELECT_TIME: "Please select a time",
} as const;
