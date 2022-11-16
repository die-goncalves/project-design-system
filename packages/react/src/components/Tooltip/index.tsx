import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { StyledArrow, StyledContent } from './styles'

type TooltipProviderProps = {} & TooltipPrimitive.TooltipProviderProps
function TooltipProvider({ children, ...props }: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider {...props}>{children}</TooltipPrimitive.Provider>
  )
}
TooltipProvider.displayName = 'Tooltip.Provider'

export type TooltipRootProps = {} & TooltipPrimitive.TooltipProps
function TooltipRoot({ children, ...props }: TooltipRootProps) {
  return <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
}
TooltipRoot.displayName = 'Tooltip.Root'

type TooltipTriggerProps = {} & TooltipPrimitive.TooltipTriggerProps
function TooltipTrigger({ children, ...props }: TooltipTriggerProps) {
  return (
    <TooltipPrimitive.Trigger {...props}>{children}</TooltipPrimitive.Trigger>
  )
}
TooltipTrigger.displayName = 'Tooltip.Trigger'

export type TooltipContentProps = {} & TooltipPrimitive.TooltipContentProps
export function TooltipContent({ ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <StyledContent {...props} />
    </TooltipPrimitive.Portal>
  )
}
TooltipContent.displayName = 'Tooltip.Content'

type TooltipArrowProps = {} & TooltipPrimitive.TooltipArrowProps
function TooltipArrow({ ...props }: TooltipArrowProps) {
  return <StyledArrow {...props} />
}
TooltipArrow.displayName = 'Tooltip.Arrow'

export const Tooltip = {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Content: TooltipContent,
  Arrow: TooltipArrow,
  Trigger: TooltipTrigger,
}
