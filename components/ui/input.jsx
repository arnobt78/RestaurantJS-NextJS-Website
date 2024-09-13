import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[62px] w-full border-white/10 bg-white/5 px-6 py-2 text-white placeholder:text-white/80 focus-visible:outline-nonefocus-visible:ring-1 focus-visible:ring-orange disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
