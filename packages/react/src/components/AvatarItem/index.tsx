import { Tooltip } from '../Tooltip'
import { StyledAvatarItem } from './styles'

type AvatarItemProps = {
  zIndex: number
  maxZIndex: number
  avatar: { src: string; alt: string; name: string }
}

export function AvatarItem({ avatar, zIndex, maxZIndex }: AvatarItemProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <StyledAvatarItem
            css={{ '--z-index': zIndex, '--max-index': maxZIndex }}
          >
            <img src={avatar.src} alt={avatar.alt} />
          </StyledAvatarItem>
        </Tooltip.Trigger>
        <Tooltip.Content side="bottom" align="center" sideOffset={8}>
          {avatar.name}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
