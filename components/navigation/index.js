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
    this.navigationLinks = this.element.queryAll('a')
    this.openBtn.addEventListener('click', event => {
      this.toggleNav()
    })

    // Close navigation links on every click
    this.navigationLinks.forEach(l => {
      l.addEventListener('click', ::this.toggleNav)
    })
  }
  /**
   * Toggles the navigation
   */
  toggleNav () {
    this.element.classList.toggle('open')
    this.openBtn.classList.toggle('nav-open')
  }
}
