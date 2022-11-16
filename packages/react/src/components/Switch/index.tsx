import { ComponentProps } from 'react'
import { StyledSwitch, StyledThumb } from './styles'

export type SwitchContainerProps = ComponentProps<typeof StyledSwitch>
const SwitchContainer = StyledSwitch
SwitchContainer.displayName = 'Switch.Container'

export type StyledThumbProps = ComponentProps<typeof StyledThumb>
const SwitchThumb = StyledThumb
SwitchThumb.displayName = 'Switch.Thumb'

export const Switch = {
  Container: SwitchContainer,
  Thumb: SwitchThumb,
}
