/* Featch api example
  fetch('/contact', {
    method: 'post'
  }).then(function(response) {
    console.log(response);
  }).catch(function(err) {
    // Error :(
  })
*/

export default class Contact {
  /**
   * @param {Object} options - Component options
   * @param {HTMLElement} options.element - Component element
   */
  constructor (options) {
    this.element = options.element
    this.form = this.element.querySelector('form')
    this.flash = this.element.querySelector('.flash')

    // Submit form
    this.form.addEventListener('submit', ::this.submit)

    console.log(this.form)
  }

  /**
   * Sets flash message
   * @param {String} msg -
   */
  setFlashMessage (msg) {
    if (typeof msg === 'string') {
      this.flash.innerHTML = `<h3>${msg}</h3>`
      this.flash.classList.remove('hidden')
    }
  }
  /**
   * Handles form submission
   * @param {Event} event - form submit event
   */
  submit (event) {
    event.preventDefault()
    // Hide flash on every submit
    this.flash.classList.remove('hidden')
    // Assign data
    let data = {}
    data.name = this.form.name.value
    data.email = this.form.email.value
    data.challenge = this.form.challenge.value
    data.message = this.form.message.value
    // Create new header
    let h = new Headers()
    // Assign json content type
    h.append('Content-Type', 'application/json')

    let payLoad = {
      method: 'post',
      headers: h,
      body: JSON.stringify(data)
    }

    /* Featch api */
    fetch('/contact', payLoad).then(response => {
      let contentType = response.headers.get('content-type')

      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json().then(json => {
          // process your JSON further
          // Every server response will flash to
          this.setFlashMessage(json.message)
          this.form.reset()
        })
      } else {
        console.log('Error, non json object returned. Something is wrong with the server. Apologies :(')
      }
    }).catch ((err) => {
      // Error :(
      this.setFlashMessage(`Error contacting to server, It's a client side thang. Is your internet connected?`)
    })
  }
}
