import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space', // aqui é para falar p stitches q quero usar as variaveis declaradas em space
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    radii,
    fonts,
    lineHeights,
    space,
  },
})
