import {
  Button,
  Dialog as DialogComponent,
  DialogRootProps,
  Heading,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Dialog',
  component: DialogComponent.Root,
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
} as Meta<DialogRootProps>

const Template: Story<DialogRootProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <DialogComponent.Root
      {...args}
      onOpenChange={(open) => updateArgs({ open })}
    >
      <DialogComponent.Trigger asChild>
        <Button variant="primary">Open dialog</Button>
      </DialogComponent.Trigger>

      <DialogComponent.Portal>
        <DialogComponent.Overlay />
        <DialogComponent.Content>
          <DialogComponent.Title asChild>
            <Heading size="md">Dialog Title</Heading>
          </DialogComponent.Title>
          <DialogComponent.Description asChild>
            <Text size="sm" css={{ color: '#a9a9b2' }}>
              Dialog description
            </Text>
          </DialogComponent.Description>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sunt
            mollitia molestias commodi excepturi ea accusamus dignissimos fugiat
            expedita molestiae veniam repellat odit, ut nobis officia. Quam ea
            ipsa rerum.
          </Text>

          <DialogComponent.Close />
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  )
}

export const Dialog = Template.bind({})
