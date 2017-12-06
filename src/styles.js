import { css } from 'styled-components'

export const colors = {
  primary: '#3E92CC',
  secondary: '#FFBA49',
  lightestGrey: '#FAFAFA',
  lightGrey: '#EBEBEB',
  grey: '#CFCECF',
  darkGrey: '#7B7A7B',
  darkestGrey: '#363537'
}

export const sizes = {
  widescreen: 1200,
  desktop: 992,
  tablet: 768
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
