import * as PopoverPrimitive from '@radix-ui/react-popover'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { StyledArrow, StyledClose, StyledContent } from './styles'

export type PopoverRootProps = PopoverPrimitive.PopoverProps
export type PopoverContentProps = {} & ComponentProps<typeof StyledContent>

function PopoverContent({ children, ...props }: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </PopoverPrimitive.Portal>
  )
}

export type PopoverArrowProps = {} & ComponentProps<typeof StyledArrow>
export const PopoverArrow = StyledArrow
PopoverArrow.displayName = 'Popover.Arrow'

export type PopoverCloseProps = {} & ComponentProps<typeof StyledClose>
function PopoverClose({ ...props }: PopoverCloseProps) {
  return (
    <StyledClose {...props}>
      <X />
    </StyledClose>
  )
}
PopoverClose.displayName = 'Popover.Close'

export const Popover = {
  Root: PopoverPrimitive.Root,
  Trigger: PopoverPrimitive.Trigger,
  Content: PopoverContent,
  Arrow: PopoverArrow,
  Close: PopoverClose,
}
