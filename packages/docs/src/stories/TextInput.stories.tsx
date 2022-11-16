import { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Text Input',
  args: {
    disabled: false,
  },
  component: TextInput,
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
  },
}

export const WithLabel: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">E-mail address</Text>
          {Story()}
        </Box>
      )
    },
  ],
}
