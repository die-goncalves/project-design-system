import { Meta, Story } from '@storybook/react'
import {
  AvatarGroup as AvatarGroupComponent,
  AvatarGroupProps,
} from '@ignite-ui/react'

const data = [
  {
    src: 'https://images.unsplash.com/photo-1596759963532-204998eeb5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    alt: 'avatar-1',
    name: 'Rose Snyder',
  },
  {
    src: 'https://images.unsplash.com/photo-1577130661762-1e4944ba63ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    alt: 'avatar-2',
    name: 'Misbah Carter',
  },
  {
    src: 'https://images.unsplash.com/photo-1648927678844-dc409fa43db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    alt: 'avatar-3',
    name: 'Suzannah Baldwin',
  },
  {
    src: 'https://images.unsplash.com/photo-1559331009-c18cce829dea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    alt: 'avatar-4',
    name: 'Sheila  Wells',
  },
  {
    src: 'https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    alt: 'avatar-5',
    name: 'Fathima Campos',
  },
  {
    src: 'https://images.unsplash.com/photo-1666933545505-9fc1bf478bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    alt: 'avatar-6',
    name: 'Aine May',
  },
  {
    src: 'https://images.unsplash.com/photo-1666933000057-bd414f5e214e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    alt: 'avatar-7',
    name: 'Lubna Whitehouse',
  },
  {
    src: 'https://images.unsplash.com/photo-1666803276369-0d4410264820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    alt: 'avatar-8',
    name: 'Raihan Lloyd',
  },
  {
    src: 'https://images.unsplash.com/photo-1666855281698-2815976e8371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
    alt: 'avatar-9',
    name: 'Keeley Lawrence',
  },
  {
    src: 'https://images.unsplash.com/photo-1667047999537-455cb286e0e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    alt: 'avatar-10',
    name: 'Sahara Mendez',
  },
]

export default {
  title: 'Data display/Avatar/Avatar Group',
  component: AvatarGroupComponent,
  args: {
    mode: 'top',
    max: 3,
    data,
    positionPopover: 'last',
  },
  argTypes: {
    mode: { options: ['top', 'bottom'], control: { type: 'inline-radio' } },
    positionPopover: {
      options: ['first', 'last'],
      control: { type: 'inline-radio' },
    },
    max: { control: { type: 'number', min: 1, max: 4, step: 1 } },
    data: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'padded',
  },
} as Meta<AvatarGroupProps>

const Template: Story<AvatarGroupProps> = (args) => {
  return <AvatarGroupComponent {...args} />
}

export const AvatarGroup = Template.bind({})
