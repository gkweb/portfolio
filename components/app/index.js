import 'dom4'
import 'svgxuse'
import domready from 'domready'
import Home from '../home'
import Navigation from '../navigation'

domready(() => {
  let home = new Home({element: document.querySelector('[data-component=home]')})
  let nav = new Navigation({element: document.querySelector('[data-component=navigation]')})
})
