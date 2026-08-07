import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src="/logo.png"
        alt="Optimanex Logo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
        priority
      />
    </div>
  );
}
