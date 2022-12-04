import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  width: '100%',

  div: {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@media (max-width: 768px)': {
      padding: '2rem 2rem',
    },
  },
})
