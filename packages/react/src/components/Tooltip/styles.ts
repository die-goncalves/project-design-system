import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled, keyframes } from '../../styles'

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

export const StyledContent = styled(TooltipPrimitive.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  borderRadius: '$xs',
  padding: '$3 $4',
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

  fontFamily: '$default',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '200ms',
    animationTimingFunction: 'ease-out',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

export const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
  width: '16px',
  height: '8px',
})
