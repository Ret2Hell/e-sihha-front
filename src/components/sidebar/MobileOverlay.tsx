import { motion, AnimatePresence } from "framer-motion";
import { overlayVariants } from "./animations";

export const MobileOverlay = ({ isOpen, onClose }: MobileOverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          className="fixed inset-0 bg-black z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
};
