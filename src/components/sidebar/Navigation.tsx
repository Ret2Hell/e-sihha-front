import NavigationItem from "./NavigationItem";

export const Navigation = ({
  menuItems,
  pathname,
  isCollapsed,
}: NavigationProps) => {
  return (
    <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
      {menuItems.map((item) => {
        const isActive = pathname.startsWith(item.path);

        return (
          <NavigationItem
            key={item.name}
            item={item}
            isActive={isActive}
            isCollapsed={isCollapsed}
          />
        );
      })}
    </nav>
  );
};
