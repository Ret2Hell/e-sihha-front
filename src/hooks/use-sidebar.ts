import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMobile } from "./use-mobile";

export const useSidebar = (initialCollapsed = false) => {
  const pathname = usePathname();
  const isMobile = useMobile();
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile sidebar on mount
  useEffect(() => {
    setIsMobileOpen(false);
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const closeMobileSidebar = () => {
    setIsMobileOpen(false);
  };

  return {
    isCollapsed,
    isMobileOpen,
    isMobile,
    toggleSidebar,
    closeMobileSidebar,
    pathname,
  };
};
