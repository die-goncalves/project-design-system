import * as PopoverPrimitive from '@radix-ui/react-popover'
import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(50%)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-50%)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-50%)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(50%)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const StyledContent = styled(PopoverPrimitive.Content, {
  width: '$80',
  borderRadius: '$xs',
  padding: '$5',
  backgroundColor: '$gray900',
  color: 'white',

  flex: 'none',
  filter: `drop-shadow(
        0.5px 1.1px 1.1px rgba(0, 0, 0, 0.031)
      )
      drop-shadow(
        2.8px 5.7px 5.7px rgba(0, 0, 0, 0.056)
      )
      drop-shadow(
        5.8px 11.7px 11.7px rgba(0, 0, 0, 0.069)
      )
      drop-shadow(
        16px 32px 32px rgba(0, 0, 0, 0.1)
      )`,

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },

  outline: 0,
})

export const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: '$gray900',
  width: '16px',
  height: '8px',
})

export const StyledClose = styled(PopoverPrimitive.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 5,
  right: 5,

  cursor: 'pointer',
})
