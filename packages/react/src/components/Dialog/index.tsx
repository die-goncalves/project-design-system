import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'
import {
  StyledOverlay,
  StyledContent,
  StyledTitle,
  StyledDescription,
  StyledClose,
  StyledActions,
} from './styles'

export type DialogRootProps = {} & DialogPrimitive.DialogProps
function DialogRoot(props: DialogRootProps) {
  return <DialogPrimitive.Root {...props} />
}
DialogRoot.displayName = 'Dialog.Root'

export const DialogTrigger = DialogPrimitive.Trigger
DialogTrigger.displayName = 'Dialog.Trigger'

export const DialogPortal = DialogPrimitive.Portal
DialogPortal.displayName = 'Dialog.Portal'

export type DialogOverlayProps = {} & DialogPrimitive.DialogOverlayProps
function DialogOverlay(props: DialogOverlayProps) {
  return <StyledOverlay {...props} />
}
DialogOverlay.displayName = 'Dialog.Overlay'

export type DialogContentProps = {} & DialogPrimitive.DialogContentProps
function DialogContent(props: DialogContentProps) {
  return <StyledContent {...props} />
}
DialogContent.displayName = 'Dialog.Content'

export type DialogTitleProps = {} & DialogPrimitive.DialogTitleProps
function DialogTitle(props: DialogTitleProps) {
  return <StyledTitle {...props} />
}
DialogTitle.displayName = 'Dialog.Title'

const DialogDescription = StyledDescription
DialogDescription.displayName = 'Dialog.Description'

export type DialogCloseProps = {} & DialogPrimitive.DialogCloseProps
function DialogClose({ ...props }: DialogCloseProps) {
  return (
    <StyledClose {...props}>
      <X />
    </StyledClose>
  )
}
DialogClose.displayName = 'Dialog.Close'

export type DialogActionsProps = {
  children: ReactNode
  align: 'left' | 'center' | 'right'
}
function DialogActions({ align, children }: DialogActionsProps) {
  return <StyledActions css={{ '--align': align }}>{children}</StyledActions>
}
DialogActions.displayName = 'Dialog.Actions'

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
  Actions: DialogActions,
}
