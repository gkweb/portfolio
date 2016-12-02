let content = {
  props: {
    title: 'Glade Kettle | Front end Developer based in Melbourne, Australia',
    navigation: {
      title: 'Some brap',
      button: {
        icon: [
          {url: '/content/symbols.svg#icon-menu'},
          {url: '/content/symbols.svg#icon-close'}
        ]
      },
      links: [
        {
          text: 'Home',
          id: 'home',
          url: '#/home',
          iconUrl: '/content/symbols.svg#icon-home'
        },
        {
          text: 'Work',
          id: 'work',
          url: '#/work',
          iconUrl: '/content/symbols.svg#icon-briefcase'
        },
        {
          text: 'Contact',
          id: 'contact',
          url: '#/contact',
          iconUrl: '/content/symbols.svg#icon-envelope-o'
        }
      ]
    },
    home: {
      title: 'Glade Kettle, Front end Developer based in Melbourne, Australia',
      logo: {
        url: '/content/symbols.svg#icon-logo'
      },
      bg: [
        {
          url: '/content/images/melbourne_collins_street.jpg'
        },
        {
          url: '/content/images/melbourne_collins_street_blur4.jpg'
        }
      ],
      text: [
        'Hi I\'m Glade, A freelance front end developer.',
        'I have experience on projects small and large across a series of capacities.'
      ],
      workLink: {
        type: 'a',
        text: 'View work',
        attributes: {
          href: '/#/work'
        }
      },
      links: [
        {
          text: 'Github',
          url: 'https://github.com/gkweb',
          iconUrl: '/content/symbols.svg#icon-github2'
        },
        {
          text: 'LinkedIn',
          url: 'http://www.linkedin.com/in/gladekettle',
          iconUrl: '/content/symbols.svg#icon-linkedin'
        },
        {
          text: 'Email',
          url: '/#/contact',
          iconUrl: '/content/symbols.svg#icon-envelope-o'
        }
      ]
    },
    contact: {
      title: 'Contact me',
      fields: [
        {
          type: 'text',
          id: 'email',
          label: 'Name',
          attributes: {
            type: 'email',
            placeholder: 'Name..',
            required: 'required',
            maxlength: 100,
            minlength: 2
          }
        },
        {
          type: 'email',
          id: 'name',
          label: 'Email',
          attributes: {
            type: 'email',
            placeholder: 'Email..',
            required: 'required',
            maxlength: 100,
            minlength: 2
          }
        },
        {
          type: 'text',
          id: 'challenge',
          label: 'Challenge',
          attributes: {
            type: 'email',
            placeholder: '100 - 87 =',
            required: 'required',
            maxlength: 2,
            minlength: 2
          }
        },
        {
          type: 'textarea',
          id: 'name',
          label: 'Message',
          attributes: {
            type: 'textarea',
            placeholder: 'Your message..',
            required: 'required',
            maxlength: 100,
            minlength: 2
          }
        },
        {
          type: 'button',
          id: 'name',
          text: 'Submit',
          attributes: {
            type: 'submit'
          }
        }
      ]
    }
  }
}

module.exports = content
