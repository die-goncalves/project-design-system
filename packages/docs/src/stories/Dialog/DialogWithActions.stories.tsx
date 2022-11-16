import {
  Button,
  Dialog as DialogComponent,
  Heading,
  Text,
  DialogActionsProps,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Overlay/Dialog/With Actions',
  component: DialogComponent.Actions,
  args: {
    align: 'right',
  },
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
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
} as Meta<DialogActionsProps>

const Template: Story<DialogActionsProps> = (args) => {
  return (
    <DialogComponent.Root>
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

          <DialogComponent.Actions {...args}>
            <Button variant="secondary">Secondary</Button>
            <Button variant="primary">Primary</Button>
          </DialogComponent.Actions>
          <DialogComponent.Close />
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  )
}

export const WithActions = Template.bind({})
