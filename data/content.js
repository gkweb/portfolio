let content = {
  props: {
    title: 'Glade Kettle | Front end Developer based in Melbourne, Australia',
    navigation: {
      title: 'Some brap',
      links: [
        {
          text: 'Work',
          url: '#/work'
        },
        {
          text: 'Other',
          url: '#/work'
        },
        {
          text: 'Contact',
          url: '#/contact'
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
          iconUrl: '/content/symbols.svg#icon-mail'
        }
      ]
    }
  }
}

module.exports = content
