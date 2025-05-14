"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calendar,
  FileText,
  Users,
  Settings,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Sidebar({
  className,
  isCollapsed,
  onToggleCollapse,
}: SidebarProps) {
  const pathname = usePathname();
  const isMobile = useMobile();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      onToggleCollapse();
    }
  };

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <Home className="h-5 w-5" />,
      path: "/user/dashboard",
    },
    {
      name: "Appointments",
      icon: <Calendar className="h-5 w-5" />,
      path: "/user/appointments",
    },
    {
      name: "Medical Records",
      icon: <FileText className="h-5 w-5" />,
      path: "/user/records",
    },
    {
      name: "Doctors",
      icon: <Users className="h-5 w-5" />,
      path: "/user/doctors",
    },
    {
      name: "Settings",
      icon: <Settings className="h-5 w-5" />,
      path: "/user/settings",
    },
  ];

  // Sidebar variants for animations
  const sidebarVariants = {
    expanded: { width: "280px" },
    collapsed: { width: "80px" },
  };

  // Mobile sidebar variants
  const mobileSidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  // Overlay variants
  const overlayVariants = {
    open: { opacity: 0.5 },
    closed: { opacity: 0 },
  };

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}

      {/* Mobile overlay */}
      {isMobile && (
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
          )}
        </AnimatePresence>
      )}

      {/* Desktop sidebar */}
      {!isMobile && (
        <motion.div
          variants={sidebarVariants}
          initial={isCollapsed ? "collapsed" : "expanded"}
          animate={isCollapsed ? "collapsed" : "expanded"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "hidden md:flex flex-col h-screen bg-white border-r border-gray-200 shadow-sm z-30 fixed top-0 left-0",
            className
          )}
        >
          <div
            className={cn(
              "flex items-center p-4",
              isCollapsed ? "justify-center" : "justify-between"
            )}
          >
            {!isCollapsed && (
              <div className="flex items-center">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="mr-1 mb-1 h-8 w-8 rounded-full "
                  />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600"
                  >
                    e-Sihha
                  </motion.span>
                </div>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700"
            >
              <ChevronRight
                className={`h-5 w-5 transition-transform duration-300 ${
                  isCollapsed ? "" : "rotate-180"
                }`}
              />
            </Button>
          </div>

          <div className="mt-2 border-t border-gray-200"></div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg transition-colors duration-200",
                    isActive
                      ? "bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-600"
                      : "text-gray-700 hover:bg-gray-100",
                    isCollapsed && "justify-center"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center",
                      isActive ? "text-teal-600" : "text-gray-500"
                    )}
                  >
                    {item.icon}
                  </div>
                  {!isCollapsed && (
                    <span className="ml-3 text-sm font-medium">
                      {item.name}
                    </span>
                  )}
                  {isActive && !isCollapsed && (
                    <div className="ml-auto w-1.5 h-6 rounded-full bg-gradient-to-b from-teal-500 to-cyan-500"></div>
                  )}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      )}

      {/* Mobile sidebar */}
      {isMobile && (
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileSidebarVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-screen w-[280px] bg-white border-gray-200 shadow-lg z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="mr-1 mb-1 h-8 w-8 rounded-full "
                  />
                  <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                    e-Sihha
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSidebar}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-2 border-t border-gray-200"></div>

              {/* Navigation */}
              <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                {menuItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-lg transition-colors duration-200",
                        isActive
                          ? "bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-600"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center",
                          isActive ? "text-teal-600" : "text-gray-500"
                        )}
                      >
                        {item.icon}
                      </div>
                      <span className="ml-3 text-sm font-medium">
                        {item.name}
                      </span>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-6 rounded-full bg-gradient-to-b from-teal-500 to-cyan-500"></div>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
