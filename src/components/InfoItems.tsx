import { cn } from "@/lib/utils";

interface InfoItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  className?: string;
}

export function InfoItem({
  icon: Icon,
  label,
  value,
  className,
}: InfoItemProps) {
  return (
    <div
      className={cn("flex items-center gap-2 text-muted-foreground", className)}
    >
      <Icon className="h-5 w-5" />
      <span>
        {label} {value}
      </span>
    </div>
  );
}
