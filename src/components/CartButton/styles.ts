import { styled } from '../../styles'

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  background: '$gray800',
  color: '$gray500',

  minWidth: '3rem',
  minHeight: '3rem',

  svg: {
    fontSize: 24,
  },

  variants: {
    color: {
      gray: {
        backgroundColor: '$gray800',
        color: '$600',
      },
      green: {
        backgroundColor: '$yellow500',
        color: '$gray800',

        '&:not(:disabled):hover': {
          backgroundColor: '$yellow300',
        },
      },
    },
    size: {
      medium: {
        width: '3rem',
        height: '3rem',

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: '3.5rem',
        height: '3.5rem',

        svg: {
          fontSize: 34,
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
    size: 'medium',
  },
})
