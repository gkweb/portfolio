/**
 * @author Glade Kettle
 */
export default class Navigation {
  /**
   * Constructs new navigation component
   * @param {Object} options - component options
   */
  constructor (options) {
    this.element = options.element
    this.openBtn = this.element.querySelector('.navigation-toggle')
    this.openBtn.addEventListener('click', event => {
      this.toggleNav()
    })
  }
  toggleNav () {
    this.element.classList.toggle('open')
    this.openBtn.classList.toggle('nav-open')
  }
}
