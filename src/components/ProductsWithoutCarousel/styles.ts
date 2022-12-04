import Link from 'next/link'
import { styled } from '../../styles'

export const ProductsWithoutCarouselContainer = styled('div', {
  display: 'none',

  '@media (max-width: 768px)': {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
})

export const HomeContainer = styled('main', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  padding: '0 2rem',
})

export const Product = styled(Link, {
  minWidth: '100%',
  width: '100%',
  background: '$gray800',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  minHeight: 556,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$yellow300',
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const SliderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
})
