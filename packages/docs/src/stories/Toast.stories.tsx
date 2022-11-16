import {
  Button,
  Toast as ToastComponent,
  ToastRootProps,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Toast',
  component: ToastComponent.Root,
  args: {
    open: false,
  },
  argTypes: {
    open: { control: 'boolean' },
  },
} as Meta<ToastRootProps>

const Template: Story<ToastRootProps> = (args) => {
  const [{ open }, updateArgs] = useArgs()

  return (
    <ToastComponent.Provider>
      <Button onClick={() => updateArgs({ open: !open })}>
        <Text>Open toast</Text>
      </Button>

      <ToastComponent.Root
        {...args}
        onOpenChange={(open) => updateArgs({ open })}
      >
        <ToastComponent.Title>Agendamento realizado</ToastComponent.Title>

        <ToastComponent.Description>
          Quarta-feira, 23 de Outubro às 16h
        </ToastComponent.Description>

        <ToastComponent.Close aria-label="Close" />
      </ToastComponent.Root>
      <ToastComponent.Viewport />
    </ToastComponent.Provider>
  )
}
export const Toast = Template.bind({})
