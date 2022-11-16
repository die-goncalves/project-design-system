import { Property } from '@stitches/react/types/css'
import { styled, keyframes } from '../styles'

const shimmer = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
})

const SkeletonContainer = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '$gray800',

  '&::after': {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(90deg, #ffffff00 0%, #ffffff20 20%, #ffffff50 60%, #ffffff00 0%)',
    opacity: 0.1,
    animation: `${shimmer} 1.2s infinite linear`,
    content: '',
  },

  variants: {
    variant: {
      circular: {
        borderRadius: '50%',
      },
      rectangular: {},
      rounded: {
        borderRadius: '$sm',
      },
    },
  },
})

export type SkeletonProps = {
  width: Property.Width
  height: Property.Height
  variant: 'circular' | 'rectangular' | 'rounded'
}
export function Skeleton({
  height,
  variant = 'rectangular',
  width,
}: SkeletonProps) {
  return <SkeletonContainer variant={variant} css={{ width, height }} />
}
