import * as SwitchPrimitive from '@radix-ui/react-switch'
import { styled } from '../../styles'

export const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: '48px',
  height: '28px',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  position: 'relative',
  cursor: 'pointer',
  '&[data-state="checked"]': { backgroundColor: '$ignite300' },
})

export const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: '20px',
  height: '20px',
  backgroundColor: '$gray600',
  borderRadius: '$xs',
  transition: 'transform 0.2s linear',
  transform: 'translateX(4px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(24px)' },
})
