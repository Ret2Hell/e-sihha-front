import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { logoTextVariants } from "./animations";

export const SidebarHeader = ({
  isCollapsed,
  onToggle,
  showLogo = true,
}: SidebarHeaderProps) => {
  return (
    <div
      className={cn(
        "flex items-center p-4",
        isCollapsed ? "justify-center" : "justify-between"
      )}
    >
      {!isCollapsed && showLogo && (
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="e-Sihha Logo"
              width={40}
              height={40}
              className="mr-1 mb-1 h-8 w-8 rounded-full"
            />
            <motion.span
              variants={logoTextVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
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
        onClick={onToggle}
        className="text-gray-500 hover:text-gray-700"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <ChevronRight
          className={cn(
            "h-5 w-5 transition-transform duration-300",
            isCollapsed ? "" : "rotate-180"
          )}
        />
      </Button>
    </div>
  );
};
