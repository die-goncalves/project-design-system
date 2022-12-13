import {
  Button,
  Popover as PopoverComponent,
  PopoverRootProps,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Popover/Without Arrow',
  component: PopoverComponent.Root,
  args: {
    open: false,
  },
  argTypes: {
    open: { control: 'boolean' },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<PopoverRootProps>

const Template: Story<PopoverRootProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <PopoverComponent.Root
      {...args}
      onOpenChange={(open) => updateArgs({ open })}
    >
      <PopoverComponent.Trigger asChild>
        <Button variant="primary">Abrir popover</Button>
      </PopoverComponent.Trigger>

      <PopoverComponent.Content>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</Text>
      </PopoverComponent.Content>
    </PopoverComponent.Root>
  )
}

export const WithoutArrow = Template.bind({})
