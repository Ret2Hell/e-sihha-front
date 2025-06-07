"use client";

import { useSidebar } from "@/hooks/use-sidebar";
import {
  MobileToggle,
  MobileOverlay,
  DesktopSidebar,
  MobileSidebar,
} from "./sidebar";

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  menuItems: MenuItem[];
}

export default function Sidebar({
  className,
  isCollapsed,
  onToggleCollapse,
  menuItems,
}: SidebarProps) {
  const {
    isMobileOpen,
    isMobile,
    toggleSidebar,
    closeMobileSidebar,
    pathname,
  } = useSidebar(isCollapsed);

  const handleToggle = () => {
    if (isMobile) {
      toggleSidebar();
    } else {
      onToggleCollapse();
    }
  };

  return (
    <>
      {isMobile && <MobileToggle onToggle={handleToggle} />}

      {isMobile && (
        <MobileOverlay isOpen={isMobileOpen} onClose={closeMobileSidebar} />
      )}

      {!isMobile && (
        <DesktopSidebar
          className={className}
          isCollapsed={isCollapsed}
          onToggle={handleToggle}
          menuItems={menuItems}
          pathname={pathname}
        />
      )}

      {isMobile && (
        <MobileSidebar
          isOpen={isMobileOpen}
          onClose={closeMobileSidebar}
          menuItems={menuItems}
          pathname={pathname}
        />
      )}
    </>
  );
}
