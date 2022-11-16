import { styled, keyframes } from '../../styles'
import * as ToastPrimitive from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  display: 'grid',
  position: 'relative',
  gridTemplateAreas: '"title" "description"',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(2, 1fr)',
  rowGap: '$1',
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  fontFamily: '$default',
  fontWeight: '$bold',
  lineHeight: '$base',
  fontSize: '$xl',
  color: '$white',
})

export const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  fontFamily: '$default',
  fontWeight: '$regular',
  lineHeight: '$base',
  fontSize: '$sm',
  color: '$gray200',
})

export const StyledClose = styled(ToastPrimitive.Close, {
  all: 'unset',
  cursor: 'pointer',
  position: 'absolute',
  top: '16px',
  right: '16px',
  svg: {
    width: 20,
    height: 20,
    color: '$gray200',
  },
})
