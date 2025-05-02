import { cn } from "@/lib/utils";
import Image from "next/image";

export function JumboLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      className={cn("w-24 h-24", className)}
      src="/logo.jpg"
      width={255}
      height={100}
      alt="Jumbo Logo"
    />
  )
}
