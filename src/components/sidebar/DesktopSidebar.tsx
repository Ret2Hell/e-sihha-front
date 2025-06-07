import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sidebarVariants } from "./animations";
import { SidebarHeader } from "./SidebarHeader";
import { Navigation } from "./Navigation";

export const DesktopSidebar = ({
  className,
  isCollapsed,
  onToggle,
  menuItems,
  pathname,
}: DesktopSidebarProps) => {
  return (
    <motion.div
      variants={sidebarVariants}
      initial={isCollapsed ? "collapsed" : "expanded"}
      animate={isCollapsed ? "collapsed" : "expanded"}
      className={cn(
        "hidden md:flex flex-col h-screen bg-white border-r border-gray-200 shadow-sm z-30 fixed top-0 left-0",
        className
      )}
    >
      <SidebarHeader isCollapsed={isCollapsed} onToggle={onToggle} />

      <div className="mt-2 border-t border-gray-200" />

      <Navigation
        menuItems={menuItems}
        pathname={pathname}
        isCollapsed={isCollapsed}
      />
    </motion.div>
  );
};
