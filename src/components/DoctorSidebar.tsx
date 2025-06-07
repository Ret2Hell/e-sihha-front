import { Calendar, Users, BarChart3, KeyRound } from "lucide-react";
import Sidebar from "./Sidebar";

export default function DoctorSidebar({
  className,
  isCollapsed,
  onToggleCollapse,
}: DoctorSidebarProps) {
  const doctorMenuItems = [
    {
      name: "Dashboard",
      icon: <BarChart3 className="h-5 w-5" />,
      path: "/doctor/dashboard",
    },
    {
      name: "Appointments",
      icon: <Calendar className="h-5 w-5" />,
      path: "/doctor/appointments",
    },
    {
      name: "Patients",
      icon: <Users className="h-5 w-5" />,
      path: "/doctor/patients",
    },
    {
      name: "Token",
      icon: <KeyRound className="h-5 w-5" />,
      path: "/doctor/token",
    },
  ];

  return (
    <Sidebar
      className={className}
      isCollapsed={isCollapsed}
      onToggleCollapse={onToggleCollapse}
      menuItems={doctorMenuItems}
    />
  );
}
