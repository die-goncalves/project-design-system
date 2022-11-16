import {
  StyledRadioGroupRoot,
  StyledRadioGroupItem,
  StyledRadioGroupIndicator,
} from './styles'

const RadioGroupRoot = StyledRadioGroupRoot
RadioGroupRoot.displayName = 'RadioGroup.Root'

const RadioGroupItem = StyledRadioGroupItem
RadioGroupItem.displayName = 'RadioGroup.Item'

const RadioGroupIndicator = StyledRadioGroupIndicator
RadioGroupIndicator.displayName = 'RadioGroup.Indicator'

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
  Indicator: RadioGroupIndicator,
}
