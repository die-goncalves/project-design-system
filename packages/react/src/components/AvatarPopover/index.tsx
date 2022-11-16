import {
  StyledAvatarPopover,
  StyledAvatar,
  StyledScrollAreaRoot,
  StyledScrollAreaViewport,
  StyledScrollAreaScrollbar,
  StyledScrollAreaThumb,
  StyledScrollAreaCorner,
  StyledContainerAvatars,
} from './styles'
import { Popover as PopoverComponent } from '../Popover'
import { Avatar as AvatarComponent } from '../Avatar'
import { Text } from '../Text'

type AvatarPopoverProps = {
  data: { src: string; alt: string; name: string }[]
  position: 'first' | 'last'
  mode: 'top' | 'bottom'
  maxZIndex: number
}

export function AvatarPopover({
  position,
  maxZIndex,
  data,
  mode,
}: AvatarPopoverProps) {
  const positionBasedAndOrderBasedZIndex = () => {
    if (mode === 'top') {
      if (position === 'first') return maxZIndex + 1
      return 0
    } else {
      if (position === 'first') return 0
      return maxZIndex
    }
  }

  const zIndex = positionBasedAndOrderBasedZIndex()
  return (
    <PopoverComponent.Root>
      <PopoverComponent.Trigger asChild>
        <StyledAvatarPopover
          css={{
            '--z-index': zIndex,
            '--max-index': maxZIndex + 1,
          }}
        >
          <span>+{data.length}</span>
        </StyledAvatarPopover>
      </PopoverComponent.Trigger>

      <PopoverComponent.Content
        sideOffset={8}
        css={{ width: 'auto', padding: 0 }}
      >
        <StyledScrollAreaRoot type="always">
          <StyledScrollAreaViewport>
            <StyledContainerAvatars>
              {data.map((avatar) => {
                return (
                  <StyledAvatar key={avatar.src}>
                    <AvatarComponent src={avatar.src} alt={avatar.alt} />
                    <Text>{avatar.name}</Text>
                  </StyledAvatar>
                )
              })}
            </StyledContainerAvatars>
          </StyledScrollAreaViewport>
          <StyledScrollAreaScrollbar orientation="vertical">
            <StyledScrollAreaThumb />
          </StyledScrollAreaScrollbar>
          <StyledScrollAreaCorner />
        </StyledScrollAreaRoot>

        <PopoverComponent.Arrow />
      </PopoverComponent.Content>
    </PopoverComponent.Root>
  )
}
