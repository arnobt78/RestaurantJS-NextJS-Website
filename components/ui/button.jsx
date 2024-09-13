import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-base font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-white bg-green hover:bg-green-hover",
        orange: "text-white bg-orange hover:bg-orange-hover",
        input: "bg-white/5 border border-white/10 text-white",
      },
      size: {
        default: "w-[170px] h-[62px] px-6",
        sm: "w-[150px] h-[58px] px-6"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
