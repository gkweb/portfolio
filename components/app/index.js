import 'dom4'
import 'svgxuse'
import domready from 'domready'
import Home from '../home'
import Contact from '../contact'
import Navigation from '../navigation'

domready(() => {
  let home = new Home({element: document.querySelector('[data-component=home]')})
  let contact = new Contact({element: document.querySelector('[data-component=contact]')})
  let nav = new Navigation({element: document.querySelector('[data-component=navigation]')})
})
