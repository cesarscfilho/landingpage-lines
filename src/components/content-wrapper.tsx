import { cn } from "@/lib/utils"
import React from "react"

export const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("py-[78px] px-[24px] md:px-[64px]", className)}>
      {children}
    </div>
  )
}
