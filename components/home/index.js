export default class Home {
  /**
   * @param {Object} options - Component options
   */
  constructor (options) {
    console.log("Constrcuted!@#!@#")
    this.element = options.element
    this.innerBg = this.element.querySelector('.inner-bg')
    this.layer2 = this.innerBg.querySelector('.bg-2')
    this.debugElement = this.element.querySelector('.debug')
    this.element.addEventListener('mousemove', event => {
      const bounds = this.element.getBoundingClientRect()
      const blurFullAmount = 2
      const xRelative = this.calcPositionRelative(event.clientX, bounds.width)
      const yRelative = this.calcPositionRelative(event.clientY, bounds.height)
      const maxRadius = Math.round(Math.sqrt((bounds.height * bounds.height) + (bounds.width * bounds.width)) / 2)
      const radius = Math.round(Math.sqrt((yRelative * yRelative) + (xRelative * xRelative)) / 2)
      const radiusPerc = Math.round(100 - (radius / maxRadius * 100)) // Reverse -- Center is full percetage
      // this.innerBg.style['filter'] = `blur(${(radiusPerc / 100) * blurFullAmount}em) grayscale(${radiusPerc * 0.5}%)`
      this.layer2.style.opacity = `${radiusPerc / 100}`
    })
  }
  /**
   * Calculates position relative to the center of rectangle
   * @param {Integer} position - mouse position
   * @param {Integer} length - shape length
   * @returns {Integer} float - position relative to center of rectangle.
   */
  calcPositionRelative (position, length) {
    return Math.round(position - (length / 2))
  }

}
