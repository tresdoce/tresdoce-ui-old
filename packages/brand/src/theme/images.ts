export type Image = {
  [key:string]: string;
}

export const loadings = {
  audio: `/images/svg-loaders/audio.svg`,
  ballTriangle: `/images/svg-loaders/ball-triangle.svg`,
  bars: `/images/svg-loaders/bars.svg`,
  circles: `/images/svg-loaders/circles.svg`,
  grid: `/images/svg-loaders/grid.svg`,
  hearts: `/images/svg-loaders/hearts.svg`,
  oval: `/images/svg-loaders/oval.svg`,
  puff: `/images/svg-loaders/puff.svg`,
  rings: `/images/svg-loaders/rings.svg`,
  spinningCircles: `/images/svg-loaders/spinning-circles.svg`,
  tailSpin: `/images/svg-loaders/tail-spin.svg`,
  threeDots: `/images/svg-loaders/three-dots.svg`,
}

export const themeImages = () => ({
  loading: loadings.oval
})

export default themeImages;
