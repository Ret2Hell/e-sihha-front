import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  isCollapsed,
}) => {
  return (
    <Link
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
        <span className="ml-3 text-sm font-medium">{item.name}</span>
      )}

      {isActive && !isCollapsed && (
        <div className="ml-auto w-1.5 h-6 rounded-full bg-gradient-to-b from-teal-500 to-cyan-500" />
      )}
    </Link>
  );
};

export default NavigationItem;
