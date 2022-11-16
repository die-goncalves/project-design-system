import { AvatarItem } from '../AvatarItem'
import { AvatarPopover } from '../AvatarPopover'
import { StyledAvatarGroup } from './styles'

export type AvatarGroupProps = {
  mode: 'top' | 'bottom'
  max: number
  data: { src: string; alt: string; name: string }[]
  positionPopover: 'first' | 'last'
}
export function AvatarGroup({
  mode,
  max,
  positionPopover,
  data,
}: AvatarGroupProps) {
  const visibleAvatars = data.slice(0, max)
  const hiddenAvatars = data.slice(max)

  const orderZIndex = (max: number, index: number) => {
    if (mode === 'top') return max - index
    return index + 1
  }

  return (
    <StyledAvatarGroup>
      {positionPopover === 'first' && (
        <AvatarPopover
          mode={mode}
          position="first"
          maxZIndex={max}
          data={hiddenAvatars}
        />
      )}

      {visibleAvatars.map((avatar, index) => {
        const zIndex = orderZIndex(max, index)

        return (
          <AvatarItem
            key={avatar.src}
            maxZIndex={max + 1}
            zIndex={zIndex}
            avatar={avatar}
          />
        )
      })}

      {positionPopover === 'last' && (
        <AvatarPopover
          mode={mode}
          position="last"
          maxZIndex={max}
          data={hiddenAvatars}
        />
      )}
    </StyledAvatarGroup>
  )
}

AvatarGroup.displayName = 'AvatarGroup'
