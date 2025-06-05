declare global {
  interface SidebarProps {
    className?: string;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
  }

  interface NotificationItemProps {
    title: string;
    message: string;
    time: string;
  }

  interface Doctor {
    id: string;
    name: string;
    specialty: string;
    experience: number;
    location: string;
    availability: string;
    image?: string;
    price: number;
    education: string;
    about: string;
    qualifications: string[];
    services: string[];
    workingHours: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    contact: {
      phone: string;
      email: string;
    };
  }

  export type SortOption = "experience" | "price-low" | "price-high";

  export interface DoctorsFilterState {
    searchTerm: string;
    selectedSpecialty: string;
    sortBy: SortOption;
    filteredDoctors: Doctor[];
    hasActiveFilters: boolean;
  }

  export interface DoctorsFilterActions {
    handleSearch: (term: string) => void;
    handleSpecialtyFilter: (specialty: string) => void;
    handleSort: (sort: string) => void;
    clearFilters: () => void;
  }

  interface PageHeaderProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
  }

  interface DoctorsGridProps {
    doctors: Doctor[];
  }

  interface EmptyDoctorsStateProps {
    onClearFilters: () => void;
    hasFilters: boolean;
  }

  interface DoctorCardProps {
    doctor: Doctor;
    index: number;
  }

  interface DoctorsFiltersProps {
    searchTerm: string;
    selectedSpecialty: string;
    sortBy: string;
    onSearch: (term: string) => void;
    onSpecialtyChange: (specialty: string) => void;
    onSortChange: (sort: string) => void;
  }

  interface LayoutProps {
    children: React.ReactNode;
  }

  interface BackButtonProps {
    href: string;
    children: React.ReactNode;
  }

  interface DoctorWorkingHoursProps {
    workingHours: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
  }

  interface DoctorContactProps {
    contact: {
      phone: string;
      email: string;
    };
  }

  interface DoctorAboutProps {
    doctor: Doctor;
  }

  interface DoctorServicesProps {
    services: string[];
  }

  interface DoctorQualificationsProps {
    qualifications: string[];
  }

  interface NotFoundProps {
    title: string;
    message?: string;
    backLink: {
      href: string;
      text: string;
    };
  }

  interface DoctorHeaderProps {
    doctor: Doctor;
  }

  interface ProgressStepsProps {
    currentStep: number;
  }

  export interface TimeSlot {
    time: string;
    available: boolean;
  }

  export interface ConsultationType {
    id: string;
    name: string;
    icon: React.ReactNode;
    description: string;
    duration: string;
    price: number;
  }

  export interface BookingStep {
    number: number;
    label: string;
    key: string;
  }

  export interface BookingFormData {
    selectedDate: Date | undefined;
    selectedTime: string;
    selectedType: string;
    notes: string;
  }

  export interface BookingState extends BookingFormData {
    isBooking: boolean;
    isBooked: boolean;
    currentStep: number;
  }

  export type BookingStepKey =
    | "consultation-type"
    | "date-selection"
    | "time-selection"
    | "confirmation";

  interface BookingSuccessProps {
    doctor: Doctor;
    selectedDate: Date | undefined;
    selectedTime: string;
    selectedType: string;
    totalPrice: number;
  }

  interface AppointmentSummaryProps {
    doctor: Doctor;
    selectedType: string;
    selectedDate: Date | undefined;
    selectedTime: string;
    totalPrice: number;
  }

  interface ConfirmationStepProps {
    notes: string;
    totalPrice: number;
    isBooking: boolean;
    onNotesChange: (notes: string) => void;
    onConfirmBooking: () => void;
  }

  interface TimeSelectionStepProps {
    selectedTime: string;
    selectedDate: Date | undefined;
    onTimeSelect: (time: string) => void;
  }

  interface DateSelectionStepProps {
    selectedDate: Date | undefined;
    onDateSelect: (date: Date | undefined) => void;
  }

  interface ConsultationTypeStepProps {
    selectedType: string;
    onTypeSelect: (type: string) => void;
  }

  export interface Appointment {
    id: string;
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
    status: "upcoming" | "completed" | "cancelled" | "rescheduled";
    type: "in-person" | "video";
    location?: string;
    notes?: string;
    price: number;
    duration: number;
  }

  export type AppointmentStatus = Appointment["status"];
  export type AppointmentType = Appointment["type"];

  interface AppointmentTabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    upcomingAppointments: Appointment[];
    pastAppointments: Appointment[];
  }

  interface AppointmentStatsProps {
    appointments: Appointment[];
  }

  interface AppointmentCardProps {
    appointment: Appointment;
    index: number;
  }

  interface EmptyStateProps {
    type: "upcoming" | "history";
  }
}

export {};
