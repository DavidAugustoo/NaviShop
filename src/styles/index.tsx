import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray700: '#2b2b30',
      gray500: '#8d8d99',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      yellow500: '#FFDC16',
      yellow300: '#FFF148',
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
