import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, RadioGroup as RadioGroupComponent, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Radio',
  component: RadioGroupComponent.Root,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof RadioGroupComponent.Root>

const Template: ComponentStory<typeof RadioGroupComponent.Root> = (args) => (
  <RadioGroupComponent.Root {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <RadioGroupComponent.Item value="laranja" id="opt-laranja">
          <RadioGroupComponent.Indicator />
        </RadioGroupComponent.Item>
        <Text
          as="label"
          size="sm"
          htmlFor="opt-laranja"
          css={{ cursor: 'pointer' }}
        >
          Laranja
        </Text>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <RadioGroupComponent.Item value="jambo" id="opt-jambo">
          <RadioGroupComponent.Indicator />
        </RadioGroupComponent.Item>
        <Text
          as="label"
          size="sm"
          htmlFor="opt-jambo"
          css={{ cursor: 'pointer' }}
        >
          Jambo
        </Text>
      </div>
    </Box>
  ),
}
