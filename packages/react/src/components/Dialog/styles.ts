import { styled, keyframes } from '../../styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 0.5 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -25%) scale(.8)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$gray600',
  position: 'fixed',
  opacity: 0.5,
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 0.2s linear`,
  },
})

export const StyledContent = styled(DialogPrimitive.Content, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$5',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 0.2s linear`,
  },
  '&:focus': { outline: 'none' },
})

export const StyledTitle = styled(DialogPrimitive.Title, {})

export const StyledDescription = styled(DialogPrimitive.Description, {})

export const StyledClose = styled(DialogPrimitive.Close, {
  all: 'unset',
  cursor: 'pointer',
  position: 'absolute',
  top: '0.625rem',
  right: '0.625rem',
  svg: {
    width: 20,
    height: 20,
    color: '$gray200',
  },
})

export const StyledActions = styled('div', {
  marginTop: '$4',
  display: 'flex',
  gap: '$2',
  justifyContent: 'var(--align)',
})
