import { Calendar, Users, KeyRound } from "lucide-react";
import Sidebar from "./Sidebar";

export default function UserSidebar({
  className,
  isCollapsed,
  onToggleCollapse,
}: UserSidebarProps) {
  const userMenuItems = [
    {
      name: "Doctors",
      icon: <Users className="h-5 w-5" />,
      path: "/user/doctors",
    },
    {
      name: "Appointments",
      icon: <Calendar className="h-5 w-5" />,
      path: "/user/appointments",
    },
    {
      name: "Token",
      icon: <KeyRound className="h-5 w-5" />,
      path: "/user/token",
    },
  ];

  return (
    <Sidebar
      className={className}
      isCollapsed={isCollapsed}
      onToggleCollapse={onToggleCollapse}
      menuItems={userMenuItems}
    />
  );
}
