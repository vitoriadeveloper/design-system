import { styled } from '../../styles'
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})
export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit', // usado quando quer repetir um elemento pai em um filho
})
export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
