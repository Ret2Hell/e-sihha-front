"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock, User, Video } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  TIME_SLOTS,
  UNAVAILABLE_TIME_SLOTS,
} from "@/constants/appointment-form";
import type {
  AppointmentFormData,
  AppointmentFormErrors,
} from "@/hooks/use-appointment-form";

interface AppointmentDetailsProps {
  formData: AppointmentFormData;
  errors: AppointmentFormErrors;
  onFormDataChange: (updates: Partial<AppointmentFormData>) => void;
  onClearError: (field: keyof AppointmentFormErrors) => void;
}

// Use constants from appointment-form

export default function AppointmentDetails({
  formData,
  errors,
  onFormDataChange,
  onClearError,
}: AppointmentDetailsProps) {
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      onFormDataChange({ date });
      onClearError("date");
    }
  };

  const handleTimeSelect = (time: string) => {
    onFormDataChange({ time });
    onClearError("time");
  };

  const handleTypeSelect = (type: "in-person" | "video") => {
    onFormDataChange({ type });
  };

  const handleInputChange =
    (field: keyof AppointmentFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.target;
      onFormDataChange({ [field]: value });
      if (field in errors) {
        onClearError(field as keyof AppointmentFormErrors);
      }
    };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointment Details</CardTitle>
        <CardDescription>
          Set the date, time and type of appointment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Date Selection */}
          <div className="space-y-2">
            <Label>Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !formData.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.date ? (
                    format(formData.date, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={handleDateChange}
                  initialFocus
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                />
              </PopoverContent>
            </Popover>
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date}</p>
            )}
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <Label>Time *</Label>
            <div className="grid grid-cols-3 gap-2">
              {TIME_SLOTS.map((time) => {
                const isUnavailable = UNAVAILABLE_TIME_SLOTS.includes(time);
                return (
                  <Button
                    key={time}
                    type="button"
                    variant={formData.time === time ? "default" : "outline"}
                    className={cn(
                      "h-10",
                      isUnavailable && "opacity-50 cursor-not-allowed",
                      formData.time === time &&
                        "bg-gradient-to-r from-teal-500 to-cyan-500"
                    )}
                    disabled={isUnavailable}
                    onClick={() => !isUnavailable && handleTimeSelect(time)}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {time}
                  </Button>
                );
              })}
            </div>
            {errors.time && (
              <p className="text-sm text-red-500">{errors.time}</p>
            )}
          </div>

          {/* Appointment Type */}
          <div className="space-y-2">
            <Label>Appointment Type</Label>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className={cn(
                  "flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer transition-all duration-200",
                  formData.type === "in-person"
                    ? "border-teal-500 bg-teal-50 shadow-md"
                    : "border-gray-200 hover:bg-accent hover:border-gray-300"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTypeSelect("in-person")}
              >
                <User
                  className={cn(
                    "h-6 w-6 transition-colors duration-200",
                    formData.type === "in-person"
                      ? "text-teal-600"
                      : "text-gray-600"
                  )}
                />
                <Label
                  className={cn(
                    "cursor-pointer transition-colors duration-200 font-medium",
                    formData.type === "in-person"
                      ? "text-teal-700"
                      : "text-gray-700"
                  )}
                >
                  In-Person
                </Label>
                {formData.type === "in-person" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-teal-500 rounded-full"
                  />
                )}
              </motion.div>
              <motion.div
                className={cn(
                  "flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer transition-all duration-200",
                  formData.type === "video"
                    ? "border-teal-500 bg-teal-50 shadow-md"
                    : "border-gray-200 hover:bg-accent hover:border-gray-300"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTypeSelect("video")}
              >
                <Video
                  className={cn(
                    "h-6 w-6 transition-colors duration-200",
                    formData.type === "video"
                      ? "text-teal-600"
                      : "text-gray-600"
                  )}
                />
                <Label
                  className={cn(
                    "cursor-pointer transition-colors duration-200 font-medium",
                    formData.type === "video"
                      ? "text-teal-700"
                      : "text-gray-700"
                  )}
                >
                  Video
                </Label>
                {formData.type === "video" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-teal-500 rounded-full"
                  />
                )}
              </motion.div>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <Label htmlFor="price">Price (DT) *</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange("price")}
              placeholder="Enter appointment price"
            />
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price}</p>
            )}
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange("notes")}
              placeholder="Any additional information about the appointment"
              rows={3}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
