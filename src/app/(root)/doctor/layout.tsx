"use client";

import AppNavbar from "@/components/AppNavbar";
import DoctorSidebar from "@/components/DoctorSidebar";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const DoctorLayout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useMobile();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSidebarCollapsed(
        window.innerWidth < 1024 && window.innerWidth >= 768
      );
    };
    checkScreenWidth(); // Initial check
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const handleToggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DoctorSidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={handleToggleSidebarCollapse}
      />
      <div
        className={cn(
          "min-h-screen transition-all duration-300",
          isMobile ? "ml-0" : isSidebarCollapsed ? "ml-[80px]" : "ml-[280px]"
        )}
      >
        <AppNavbar />
        <main className="mx-auto px-4 py-6">{children}</main>
      </div>
    </div>
  );
};

export default DoctorLayout;
