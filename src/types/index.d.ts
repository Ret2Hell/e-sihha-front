declare global {
  interface SidebarProps {
    className?: string;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
  }

  interface NotificationItemProps {
    title: string;
    message: string;
    time: string;
  }
}

export {};
