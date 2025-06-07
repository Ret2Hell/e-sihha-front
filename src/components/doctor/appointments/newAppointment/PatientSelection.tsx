"use client";

import React, { useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { patients } from "@/data/patients-data";
import type {
  AppointmentFormData,
  AppointmentFormErrors,
} from "@/hooks/use-appointment-form";

interface PatientSelectionProps {
  formData: AppointmentFormData;
  errors: AppointmentFormErrors;
  isNewPatient: boolean;
  onIsNewPatientChange: (isNew: boolean) => void;
  onFormDataChange: (updates: Partial<AppointmentFormData>) => void;
  onClearError: (field: keyof AppointmentFormErrors) => void;
}

export default function PatientSelection({
  formData,
  errors,
  isNewPatient,
  onIsNewPatientChange,
  onFormDataChange,
  onClearError,
}: PatientSelectionProps) {
  const [openPatientSelect, setOpenPatientSelect] = useState(false);

  const handlePatientSelect = (patientId: string) => {
    const selectedPatient = patients.find((p) => p.id === patientId);
    if (selectedPatient) {
      onFormDataChange({
        patientId,
        patientName: selectedPatient.name,
        patientEmail: selectedPatient.email,
        patientPhone: selectedPatient.phone,
      });
      setOpenPatientSelect(false);
      onClearError("patientId");
    }
  };

  const handleInputChange =
    (field: keyof AppointmentFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      onFormDataChange({ [field]: value });
      onClearError(field as keyof AppointmentFormErrors);
    };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
        <CardDescription>
          Select an existing patient or add a new one
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroup
              defaultValue="existing"
              onValueChange={(value) => onIsNewPatientChange(value === "new")}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="existing" id="existing" />
                <Label htmlFor="existing">Existing Patient</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new">New Patient</Label>
              </div>
            </RadioGroup>
          </div>

          {!isNewPatient ? (
            <div className="space-y-2">
              <Label htmlFor="patient">Select Patient</Label>
              <Popover
                open={openPatientSelect}
                onOpenChange={setOpenPatientSelect}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openPatientSelect}
                    className="w-full justify-between"
                  >
                    {formData.patientId
                      ? patients.find(
                          (patient) => patient.id === formData.patientId
                        )?.name
                      : "Select patient..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="!w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Search patients..." />
                    <CommandList>
                      <CommandEmpty>No patient found.</CommandEmpty>
                      <CommandGroup>
                        {patients.map((patient) => (
                          <CommandItem
                            key={patient.id}
                            value={patient.name}
                            onSelect={() => handlePatientSelect(patient.id)}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                formData.patientId === patient.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            <div className="flex-1">
                              <p>{patient.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {patient.email}
                              </p>
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {errors.patientId && (
                <p className="text-sm text-red-500">{errors.patientId}</p>
              )}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="patientName">Patient Name *</Label>
                <Input
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange("patientName")}
                  placeholder="Enter patient name"
                />
                {errors.patientName && (
                  <p className="text-sm text-red-500">{errors.patientName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="patientEmail">Email *</Label>
                <Input
                  id="patientEmail"
                  name="patientEmail"
                  type="email"
                  value={formData.patientEmail}
                  onChange={handleInputChange("patientEmail")}
                  placeholder="Enter patient email"
                />
                {errors.patientEmail && (
                  <p className="text-sm text-red-500">{errors.patientEmail}</p>
                )}
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="patientPhone">Phone *</Label>
                <Input
                  id="patientPhone"
                  name="patientPhone"
                  value={formData.patientPhone}
                  onChange={handleInputChange("patientPhone")}
                  placeholder="Enter patient phone"
                />
                {errors.patientPhone && (
                  <p className="text-sm text-red-500">{errors.patientPhone}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
