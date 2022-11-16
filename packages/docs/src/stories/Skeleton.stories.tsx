import { StoryObj, Meta } from '@storybook/react'
import { Skeleton, SkeletonProps } from '@ignite-ui/react'

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  args: {
    variant: 'rectangular',
    width: 100,
    height: 100,
  },
  argTypes: {
    variant: {
      options: ['circular', 'rectangular', 'rounded'],
      control: {
        type: 'inline-radio',
      },
    },
    height: {
      control: { type: 'range', min: 0, max: 500, step: 10 },
    },
    width: {
      control: { type: 'range', min: 0, max: 500, step: 10 },
    },
  },
} as Meta<SkeletonProps>

export const Rectangular: StoryObj<SkeletonProps> = {}

export const Circle: StoryObj<SkeletonProps> = {
  args: {
    variant: 'circular',
  },
}

export const Rounded: StoryObj<SkeletonProps> = {
  args: {
    variant: 'rounded',
  },
}
