import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <span className={cn("eyebrow", className)}>
      {icon}
      {children}
    </span>
  );
}
