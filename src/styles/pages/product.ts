import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    width: '100%',
    padding: '1rem 2rem',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 'auto',
  background: '$gray800',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',

    '@media (max-width: 768px)': {
      maxWidth: '100%',
      width: '100%',
      height: 'auto',
    },
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$yellow300',
    fontWeight: 'bold',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$yellow500',
    border: 0,
    color: '$gray800',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$yellow300',
    },

    '@media (max-width: 768px)': {
      marginTop: '2rem',
    },
  },
})
