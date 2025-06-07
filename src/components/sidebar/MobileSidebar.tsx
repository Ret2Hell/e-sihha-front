import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { mobileSidebarVariants } from "./animations";
import { Navigation } from "./Navigation";

export const MobileSidebar = ({
  isOpen,
  onClose,
  menuItems,
  pathname,
}: MobileSidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileSidebarVariants}
          className="fixed top-0 left-0 h-screen w-[280px] bg-white border-gray-200 shadow-lg z-50 flex flex-col"
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="e-Sihha Logo"
                width={40}
                height={40}
                className="mr-1 mb-1 h-8 w-8 rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                e-Sihha
              </span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-2 border-t border-gray-200" />

          <Navigation
            menuItems={menuItems}
            pathname={pathname}
            isCollapsed={false}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
