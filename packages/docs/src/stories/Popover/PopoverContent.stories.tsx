import {
  Button,
  Popover as PopoverComponent,
  PopoverContentProps,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Overlay/Popover/Content',
  component: PopoverComponent.Content,
  args: {
    sideOffset: 8,
    side: 'bottom',
    align: 'center',
  },
  argTypes: {
    sideOffset: {
      control: {
        type: 'number',
      },
    },
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
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<PopoverContentProps>

const Template: Story<PopoverContentProps> = (args) => {
  return (
    <PopoverComponent.Root>
      <PopoverComponent.Trigger asChild>
        <Button variant="primary">Open popover</Button>
      </PopoverComponent.Trigger>

      <PopoverComponent.Content {...args}>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>

        <PopoverComponent.Arrow />
        <PopoverComponent.Close />
      </PopoverComponent.Content>
    </PopoverComponent.Root>
  )
}

export const Content = Template.bind({})
