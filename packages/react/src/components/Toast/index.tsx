import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  StyledDescription,
  StyledTitle,
  StyledToast,
  StyledViewport,
  StyledClose,
} from './styles'

type ToastProviderProps = {} & ToastPrimitive.ToastProviderProps
function ToastProvider({ children, ...props }: ToastProviderProps) {
  return (
    <ToastPrimitive.Provider {...props}>{children}</ToastPrimitive.Provider>
  )
}
ToastProvider.displayName = 'Toast.Provider'

type ToastTitleProps = {} & ToastPrimitive.ToastTitleProps
function ToastTitle({ children, ...props }: ToastTitleProps) {
  return <StyledTitle {...props}>{children}</StyledTitle>
}
ToastTitle.displayName = 'Toast.Title'

type ToastDescriptionProps = {} & ToastPrimitive.ToastDescriptionProps
function ToastDescription({ children, ...props }: ToastDescriptionProps) {
  return <StyledDescription {...props}>{children}</StyledDescription>
}
ToastDescription.displayName = 'Toast.Description'

type ToastCloseProps = {} & ToastPrimitive.ToastCloseProps
function ToastClose({ ...props }: ToastCloseProps) {
  return (
    <StyledClose {...props}>
      <X />
    </StyledClose>
  )
}
ToastClose.displayName = 'Toast.Close'

type ToastViewportProps = {} & ToastPrimitive.ToastViewportProps
function ToastViewport({ ...props }: ToastViewportProps) {
  return <StyledViewport {...props} />
}
ToastViewport.displayName = 'Toast.Viewport'

export type ToastRootProps = {} & ToastPrimitive.ToastProps
function ToastRoot({ children, ...props }: ToastRootProps) {
  return <StyledToast {...props}>{children}</StyledToast>
}
ToastRoot.displayName = 'Toast.Root'

export const Toast = {
  Provider: ToastProvider,
  Viewport: ToastViewport,
  Title: ToastTitle,
  Description: ToastDescription,
  Close: ToastClose,
  Root: ToastRoot,
}
