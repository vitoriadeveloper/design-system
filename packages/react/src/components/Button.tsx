import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  backgroundColor: '',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300',
        },
        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$ignite500',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '#fff',
        },
        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '#fff',
        },
        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    sizes: {
      sm: {
        padding: '0 $4',
        height: 38,
      },
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    sizes: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
