import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { styled, keyframes } from '../../styles'

export const StyledRadioGroupRoot = styled(RadioGroupPrimitive.Root, {})

export const StyledRadioGroupItem = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  width: '$6',
  height: '$6',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '$gray900',
  backgroundColor: '$gray900',
  borderRadius: '100%',
  outline: 0,
  transitionDuration: '0.2s',
  transitionProperty: 'border-color, background-color',
  transitionTimingFunction: 'linear',

  cursor: 'pointer',

  '&:focus': {
    borderColor: '$ignite300',
  },
})

const increase = keyframes({
  from: { transform: 'scale(0)' },
  to: { transform: 'scale(1)' },
})
const decrease = keyframes({
  from: { transform: 'scale(1)' },
  to: { transform: 'scale(0)' },
})

export const StyledRadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  margin: 'auto',
  width: '$2',
  height: '$2',
  borderRadius: '50%',
  backgroundColor: '$ignite300',

  '&[data-state="checked"]': {
    animation: `${increase} 0.2s linear`,
  },
  '&[data-state="unchecked"]': {
    animation: `${decrease} 0.2s linear`,
  },
})
