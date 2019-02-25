// NOTE: These are CSS derived variables, needed for JS crossover.
// For things to behave as expected, the numbers should match the variables
// in the SCSS files:
// - styles/variables/_typography.scss (baseFontSize)
// - styles/variables/_breakpoints.scss (mediaQueries)
// - styles/_layout.scss (maxWidth)
// TODO: Is there some fancy way we can share these without duplicating?
const baseFontSize = 16
const mediaQueries = {
  sm: '35.5em',
  md: '48em',
  lg: '54em',
  xl: '80em',
}
const maxWidth = {
  default: 1020,
  sm: 600,
  md: 775,
}

export default {
  baseFontSize,
  mediaQueries,
  maxWidth,
  sizes: {
    full: ['100vw'],
    fullToHalfAtLarge: [`(min-width: ${mediaQueries.lg}) 50vw`, '100vw'],
    fullToThirdAtLarge: [`(min-width: ${mediaQueries.lg}) 50vw`, '100vw'],
    fullInsideMediumMaxWidth: [
      `(min-width: ${maxWidth.md}) ${maxWidth.md}`,
      '100vw',
    ],
    fullToHalfAtLargeInsideMediumMaxWidth: [
      `(min-width: ${maxWidth.md}px) ${parseInt(maxWidth.md / 2, 10)}px`,
      `(min-width: ${mediaQueries.lg}) 50vw`,
      '100vw',
    ],
    fullToThirdAtLargeInsideMediumMaxWidth: [
      `(min-width: ${maxWidth.md}px) ${parseInt(maxWidth.md / 3, 10)}px`,
      `(min-width: ${mediaQueries.lg}) 33vw`,
      '100vw',
    ],
    fullToHalfAtMediumInsideMaxWidth: [
      `(min-width: ${maxWidth.default}px) ${parseInt(
        maxWidth.default / 2,
        10
      )}px`,
      `(min-width: ${mediaQueries.md}) 50vw`,
      '100vw',
    ],
    fullToHalfAtLargeInsideMaxWidth: [
      `(min-width: ${maxWidth.default}px) ${parseInt(
        maxWidth.default / 2,
        10
      )}px`,
      `(min-width: ${mediaQueries.lg}) 50vw`,
      '100vw',
    ],
    fullToTwoThirdsAtLargeInsideMaxWidth: [
      `(min-width: ${maxWidth.default}px) ${parseInt(
        maxWidth.default * 0.66,
        10
      )}px`,
      `(min-width: ${mediaQueries.lg}) 66vw`,
      '100vw',
    ],
    fullToThirdAtLargeInsideMaxWidth: [
      `(min-width: ${maxWidth.default}px) ${parseInt(
        maxWidth.default / 3,
        10
      )}px`,
      `(min-width: ${mediaQueries.lg}) 33vw`,
      '100vw',
    ],
  },
}
