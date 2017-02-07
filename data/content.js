let content = {
  props: {
    title: 'Glade Kettle | Front end Developer based in Melbourne, Australia',
    meta: {
      title: 'Glade Kettle | Front end Developer based in Melbourne, Australia',
      description: 'Glade Kettle | Freelance Front End Developer based in Melbourne Australia',
      keywords: 'Javascript web developer es6 melbourne front end front-end js vanillajs SVG',
      image: '/content/images/gk-og-img.jpg'
    },
    externalLinks: [
      {
        attributes: {
          href: 'https://fonts.googleapis.com/css?family=Open+Sans|Sumana',
          rel: 'stylesheet'
        }
      }
    ],
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
          url: '#home',
          iconUrl: '/content/symbols.svg#icon-home'
        },
        {
          text: 'Work',
          id: 'work',
          url: '#work',
          iconUrl: '/content/symbols.svg#icon-briefcase'
        },
        {
          text: 'Contact',
          id: 'contact',
          url: '#contact',
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
          url: '/content/images/melbourne_collins_street_v2.jpg'
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
          href: '#work'
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
          text: 'Contact',
          url: '#contact',
          iconUrl: '/content/symbols.svg#icon-envelope-o'
        }
      ]
    },
    contact: {
      title: 'Contact me',
      warningBox: {
        title: 'Recruiters beware',
        text: 'I\'m not interested in banner ad or EDM work.',
        iconUrl: '/content/symbols.svg#icon-exclamation'
      },
      fields: [
        {
          type: 'text',
          id: 'name',
          label: 'Name',
          attributes: {
            type: 'text',
            title: 'Name',
            name: 'name',
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
            title: 'Email',
            name: 'email',
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
            type: 'text',
            title: '100 - 87',
            name: 'challenge',
            placeholder: '100 - 87 =',
            required: 'required',
            maxlength: 2,
            minlength: 2
          }
        },
        {
          type: 'textarea',
          id: 'message',
          label: 'Message',
          attributes: {
            type: 'textarea',
            placeholder: 'Your message..',
            name: 'message',
            required: 'required',
            maxlength: 100,
            minlength: 2
          }
        },
        {
          type: 'button',
          id: 'submit',
          text: 'Submit',
          attributes: {
            type: 'submit'
          }
        }
      ]
    },
    work: {
      title: 'Work',
      items: [
        {
          title: 'Cochlear: Does love last forever?',
          blurb: 'Custom front end build incorporating interactive video hearing test',
          url: '#',
          media: [
            {
              type: 'img',
              attributes: {
                alt: 'Does love last forever?',
                src: '/content/images/cochlear-1.jpg'
              }
            }
          ],
          tags: [
            {
              text: 'Jade / Pug'
            },
            {
              text: 'Javascript'
            },
            {
              text: 'GIT'
            },
            {
              text: 'CSS Next'
            },
            {
              text: 'CSS'
            },
            {
              text: 'SVG'
            },
            {
              text: 'PostCSS'
            }
          ]
        },
        {
          title: 'Visit Grampians',
          blurb: 'Reskinned an already existing platform to match grampians online branding',
          url: '#',
          media: [
            {
              type: 'img',
              attributes: {
                alt: 'Visit grampians',
                src: '/content/images/visit-grampians.jpg'
              }
            }
          ],
          tags: [
            {
              text: 'Twig'
            },
            {
              text: 'Javascript'
            },
            {
              text: 'jQuery'
            },
            {
              text: 'GIT'
            },
            {
              text: 'CSS'
            },
            {
              text: 'SASS'
            }
          ]
        }
      ]
    }
  }
}

module.exports = content
