import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileToggle = ({ onToggle }: MobileToggleProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="fixed top-4 left-4 z-50 md:hidden"
      aria-label="Toggle sidebar"
    >
      <Menu className="h-6 w-6" />
    </Button>
  );
};
