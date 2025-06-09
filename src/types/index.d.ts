declare global {
  interface MenuItem {
    name: string;
    icon: React.ReactNode;
    path: string;
  }

  interface SidebarProps {
    className?: string;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
    menuItems: MenuItem[];
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
    address: string;
    availability: {
      isAvailable: boolean;
    };
    image?: string;
    price: number;
    education: string;
    bio: string;
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

    phone: string;
    email: string;
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
    workingHours?: {
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
    patientName: string;
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
    patientName: string;
  }

  interface AppointmentSummaryProps {
    doctor: Doctor;
    selectedType: string;
    selectedDate: Date | undefined;
    selectedTime: string;
    totalPrice: number;
  }

  interface ConfirmationStepProps {
    patientName: string;
    totalPrice: number;
    isBooking: boolean;
    onPatientNameChange: (patientName: string) => void;
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
    patientId: string;
    patientName: string;
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
    status: "CONFIRMED" | "COMPLETED" | "CANCELLED" | "PENDING";
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

  interface BaseSidebarProps {
    className?: string;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
  }

  type DoctorSidebarProps = BaseSidebarProps;

  type UserSidebarProps = BaseSidebarProps;

  interface MobileToggleProps {
    onToggle: () => void;
  }

  interface NavigationProps {
    menuItems: MenuItem[];
    pathname: string;
    isCollapsed: boolean;
  }

  interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: MenuItem[];
    pathname: string;
  }

  interface SidebarHeaderProps {
    isCollapsed: boolean;
    onToggle: () => void;
    showLogo?: boolean;
  }

  interface MobileOverlayProps {
    isOpen: boolean;
    onClose: () => void;
  }

  interface DesktopSidebarProps {
    className?: string;
    isCollapsed: boolean;
    onToggle: () => void;
    menuItems: MenuItem[];
    pathname: string;
  }

  interface NavigationItemProps {
    item: MenuItem;
    isActive: boolean;
    isCollapsed: boolean;
  }

  export interface DashboardStats {
    todayAppointments: number;
    totalPatients: number;
    monthlyRevenue: number;
    averageRating: number;
    pendingAppointments: number;
    completedToday: number;
  }

  interface DashboardHeaderProps {
    doctorName: string;
  }

  interface TodayAppointmentsCardProps {
    appointments: TodayAppointment[];
  }

  interface DashboardStatsType {
    todayAppointments: number;
    totalPatients: number;
    monthlyRevenue: number;
    averageRating: number;
    pendingAppointments: number;
    completedToday: number;
  }

  interface DashboardStatsProps {
    stats: DashboardStatsType;
  }

  interface RecentPatient {
    id: string;
    name: string;
    lastVisit: string;
    condition: string;
    status: "stable" | "monitoring" | "improving";
  }

  interface RecentPatientsCardProps {
    patients: RecentPatient[];
  }

  interface TodayAppointment {
    id: string;
    patientName: string;
    time: string;
    type: string;
    status: "CONFIRMED" | "PENDING";
    duration: number;
  }

  interface DashboardStatsCardProps {
    title: string;
    value: string | number;
    subtitle: string;
    icon: React.ReactNode;
    colorClass: string;
    delay?: number;
  }

  // Patient interfaces
  interface Patient {
    id: string;
    name: string;
    age: number;
    gender: string;
    phone: string;
    email: string;
    lastVisit: string;
    nextAppointment?: string;
    condition: string;
    totalVisits: number;
    address?: string;
    insurance?: {
      provider: string;
      policyNumber: string;
    };
    medicalRecord: {
      _id: string;
      doctorId: string;
      diagnosis: {
        primary: string;
        icd10: string;
        date: string;
      };
      treatment: {
        medications: Array<{
          name: string;
          dosage: string;
          frequency: string;
          startDate: string;
          endDate: string | null;
        }>;
        procedures: Array<{
          name: string;
          date: string;
          result: string;
        }>;
      };
      labResults: {
        bloodPressure: Array<{
          date: string;
          systolic: number;
          diastolic: number;
        }>;
        cholesterol: Array<{
          date: string;
          total: number;
          ldl: number;
          hdl: number;
          triglycerides: number;
        }>;
        bloodSugar: Array<{
          date: string;
          fasting: number;
          hba1c: number;
        }>;
      };
      notes: string[];
      sharedWithDoctors: string[];
    };
    appointments: Array<{
      date: string;
      time: string;
      type: string;
      status: string;
    }>;
  }

  export type PatientSortOption = "name" | "lastVisit" | "age" | "visits";

  export interface PatientsFilterState {
    searchTerm: string;
    sortBy: PatientSortOption;
    filteredPatients: Patient[];
    hasActiveFilters: boolean;
  }

  export interface PatientsFilterActions {
    handleSearch: (term: string) => void;
    handleSort: (sort: string) => void;
    clearFilters: () => void;
  }

  interface PatientCardProps {
    patient: Patient;
    index: number;
  }

  interface PatientsHeaderProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
  }

  interface PatientsFiltersProps {
    searchTerm: string;
    sortBy: string;
    onSearch: (term: string) => void;
    onSortChange: (sort: string) => void;
  }

  interface PatientsGridProps {
    patients: Patient[];
  }

  interface EmptyPatientsStateProps {
    onClearFilters: () => void;
    hasFilters: boolean;
  }

  interface AppointmentsHistoryProps {
    appointments: Patient["appointments"];
  }

  interface DoctorNotesProps {
    notes: string[];
    isEditingNotes: boolean;
    newNote: string;
    onNewNoteChange: (value: string) => void;
    onStartEditing: () => void;
    onSaveNote: () => void;
    onCancelEditing: () => void;
  }

  interface LabResultCardProps {
    title: string;
    children: React.ReactNode;
  }

  interface LabResultsProps {
    labResults: Patient["medicalRecord"]["labResults"];
  }

  interface CurrentDiagnosisProps {
    diagnosis: Patient["medicalRecord"]["diagnosis"];
  }

  interface PatientHeaderProps {
    patient: Patient;
  }

  interface InsuranceCardProps {
    insurance?: Patient["insurance"];
  }

  interface PatientTabsProps {
    patient: Patient;
    notesProps: {
      notes: string[];
      isEditingNotes: boolean;
      newNote: string;
      onNewNoteChange: (value: string) => void;
      onStartEditing: () => void;
      onSaveNote: () => void;
      onCancelEditing: () => void;
    };
  }

  interface SharedAccessProps {
    sharedWithDoctors: string[];
  }

  interface DoctorAppointmentCardProps {
    appointment: Appointment;
    index: number;
    onStatusChange: (appointmentId: string, newStatus: string) => void;
  }

  interface DoctorAppointmentFiltersProps {
    statusFilter: string;
    typeFilter: string;
    onStatusFilterChange: (value: string) => void;
    onTypeFilterChange: (value: string) => void;
  }

  interface DoctorAppointmentHeaderProps {
    title: string;
    description: string;
  }

  interface DoctorAppointmentStatsProps {
    appointments: Appointment[];
  }

  interface DoctorAppointmentTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    pendingAppointments: Appointment[];
    upcomingAppointments: Appointment[];
    pastAppointments: Appointment[];
    onStatusChange: (appointmentId: string, newStatus: string) => void;
  }

  interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
    suggestions?: string[];
    recommendation?: SpecialtyRecommendation;
  }

  interface SpecialtyRecommendation {
    specialty: string;
    reason: string;
  }

  interface MessageListProps {
    messages: Message[];
    isLoading: boolean;
    scrollAreaRef: React.RefObject<HTMLDivElement | null>;
    messagesEndRef: React.RefObject<HTMLDivElement | null>;
  }

  interface ChatInputProps {
    inputMessage: string;
    setInputMessage: (message: string) => void;
    onSendMessage: () => void;
    onKeyPress: (e: React.KeyboardEvent) => void;
    isLoading: boolean;
  }

  interface SpecialtyRecommendationProps {
    recommendation: SpecialtyRecommendation;
  }

  interface ChatMessageProps {
    message: Message;
  }

  export interface DoctorApplicationFormData {
    // Personal Information
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;

    // Professional Information
    licenseNumber: string;
    licenseExpiryDate: string;
    yearsOfExperience: string;
    currentWorkplace: string;

    // Education & Training
    medicalSchool: string;
    graduationYear: string;
    residency: string;
    fellowship: string;
    certifications: string;

    // Specialization
    primarySpecialty: string;

    // Practice Details
    consultationFee: string;
    consultationTypes: string[];
    availableDays: string[];

    // Final Details
    bio: string;
    achievements: string;
    motivation: string;
    termsAccepted: boolean;
  }

  export interface FormStepProps {
    formData: DoctorApplicationFormData;
    onFormChange: (
      field: keyof DoctorApplicationFormData,
      value: string | boolean
    ) => void;
    onCheckboxChange: (field: string, value: string) => void;
    onRadioChange: (field: string, value: string) => void;
    onSpecialtyChange: (specialty: string) => void;
    onTermsChange: (checked: boolean) => void;
  }

  interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
  }
}

export {};
