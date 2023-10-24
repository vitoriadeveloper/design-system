import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  border: 0,
  fontWeight: '$bold',
  color: '$white',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$ignite500',
  },

  variants: {
    sizes: {
      small: {
        fontSize: 14,
        padding: '$2  $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },
  defaultVariants: {
    sizes: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
