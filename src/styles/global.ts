import { Roboto } from '@next/font/google'
import { globalCss } from '.'

const roboto = Roboto({
  weight: ['100', '300'],
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontFamily: roboto.style.fontFamily,
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },
})
