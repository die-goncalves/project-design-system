import { styled } from '../../styles'

export const StyledAvatarItem = styled('span', {
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  position: 'relative',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  overflow: 'hidden',
  zIndex: 'var(--z-index)',
  transition: '150ms all linear',

  '& img': {
    width: 'inherit',
    height: 'inherit',
    objectFit: 'cover',
  },

  '&:not(:first-child)': {
    marginLeft: '-12.5px',
  },

  '&:hover': {
    zIndex: 'var(--max-index)',
    transform: 'scale(1.2)',
  },
})
