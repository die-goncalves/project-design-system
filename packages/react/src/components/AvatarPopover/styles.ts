import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { styled } from '../../styles'

const SCROLLBAR_SIZE = 8

export const StyledAvatarPopover = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  overflow: 'hidden',
  zIndex: 'var(--z-index)',
  backgroundColor: '$gray900',
  transition: '150ms all linear',

  '&:not(:first-child)': {
    marginLeft: '-12.5px',
  },

  '&:hover': {
    cursor: 'pointer',
    zIndex: 'var(--max-index)',
    transform: 'scale(1.2)',
  },

  '&[data-state=open]': {
    cursor: 'pointer',
    zIndex: 'var(--max-index)',
    transform: 'scale(1.2)',
  },

  '& > span': {
    color: '$white',
    fontFamily: '$default',
    fontWeight: '$medium',
  },
})

export const StyledAvatar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const StyledScrollAreaRoot = styled(ScrollAreaPrimitive.Root, {
  width: 'inherit',
  height: 230,
  borderRadius: 4,
  overflow: 'hidden',
})

export const StyledScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
})

export const StyledContainerAvatars = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  paddingLeft: '$4',
  paddingTop: '$4',
  paddingBottom: '$4',
  paddingRight: '1.5rem',
})

export const StyledScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  background: '$gray900',
  transition: 'background 160ms ease-out',
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
})

export const StyledScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$gray800',
  '&:hover': { background: '$gray700' },
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 8,
    minHeight: 4,
  },
})

export const StyledScrollAreaCorner = styled(ScrollAreaPrimitive.Corner, {
  height: 0,
  width: 0,
})
