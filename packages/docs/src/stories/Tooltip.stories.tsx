import { Meta } from '@storybook/react'
import { Tooltip, TooltipContentProps } from '@ignite-ui/react'
import { Question } from 'phosphor-react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip.Content,
  args: {
    side: 'top',
    align: 'center',
    children: '26 de Outubro - Disponível',
    sideOffset: 8,
  },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      options: ['start', 'center', 'end'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<TooltipContentProps>

export const Primary = ({ children, ...rest }: TooltipContentProps) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Question size={24} color="#fff" />
        </Tooltip.Trigger>
        <Tooltip.Content {...rest}>
          {children}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export const WithoutArrow = (args: TooltipContentProps) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Question size={24} color="#fff" />
        </Tooltip.Trigger>
        <Tooltip.Content {...args} />
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
