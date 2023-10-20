import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export default function MaxHeightWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto min-h-screen w-full px-2.5 md:px-20", className)}
    >
      {children}
    </div>
  );
}
