import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FC, ReactNode } from "react"

interface TooltipProps {
  children: ReactNode
  tooltipContent: string
}

const TooltipComponent: FC<TooltipProps> = ({ tooltipContent, children }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipComponent
