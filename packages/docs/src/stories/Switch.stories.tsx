import type { Story, Meta } from '@storybook/react'
import {
  Box,
  Switch as SwitchComponent,
  Text,
  SwitchContainerProps,
} from '@ignite-ui/react'

export default {
  title: 'Form/Switch',
  component: SwitchComponent.Container,
} as Meta<SwitchContainerProps>

const Template: Story<SwitchContainerProps> = (args) => {
  return (
    <Box
      css={{
        display: 'flex',
        gap: '0.5rem',
      }}
    >
      <SwitchComponent.Container id="label-switch">
        <SwitchComponent.Thumb />
      </SwitchComponent.Container>
      <Text
        as="label"
        size="md"
        htmlFor="label-switch"
        css={{ cursor: 'pointer' }}
      >
        Label
      </Text>
    </Box>
  )
}

export const Primary = Template.bind({})
