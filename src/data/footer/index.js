const { CONTACT_US, PRIVACY, RESELLERS } = require('../routes')
const { paymentIcons } = require('../payment-icons')

module.exports = {
  models: [
    [
      {
        title: 'Acura',
        link: '',
      }, 
      {
        title: 'Aeolus',
        link: '',
      }, 
      {
        title: 'Alfa Romeo',
        link: '',
      }, 
      {
        title: 'AM General',
        link: '/am-general/',
      }, 
      {
        title: 'Aston Martin',
        link: '',
      }, 
      {
        title: 'Audi',
        link: '',
      }
    ],
    [
      {
        title: 'BAIC Motor',
        link: '',
      },
      {
        title: 'Baojun',
        link: '',
      },
      {
        title: 'Bentley',
        link: '',
      },
      {
        title: 'BMW',
        link: '',
      },
      {
        title: 'Borgward',
        link: '',
      },
      {
        title: 'Brilliance',
        link: '',
      },
      {
        title: 'Buick',
        link: '',
      },
      {
        title: 'BYD',
        link: '',
      },
    ],
    [
      {
        title: 'Cadillac',
        link: '',
      },
      {
        title: 'Chevrolet',
        link: '',
      },
      {
        title: 'Chrysler',
        link: '',
      },
      {
        title: 'Citroen',
        link: '',
      },
    ],
    [
      {
        title: 'Daewoo',
        link: '',
      },
      {
        title: 'Daihatsu',
        link: '',
      },
      {
        title: 'DFSK',
        link: '',
      },
      {
        title: 'Dodge',
        link: '',
      },
    ],
    [
      {
        title: 'Eagle',
        link: '',
      }
    ],
    [
      {
        title: 'FAW',
        link: '',
      },
      {
        title: 'Fiat',
        link: '',
      },
      {
        title: 'Ford',
        link: '',
      },
      {
        title: 'Futon',
        link: '',
      },
    ],
    [
      {
        title: 'Geely',
        link: '',
      },
      {
        title: 'Genesis',
        link: '',
      },
      {
        title: 'Geo',
        link: '',
      },
      {
        title: 'Giant Motors',
        link: '',
      },
      {
        title: 'GMC',
        link: '',
      },
    ],
    [
      {
        title: 'Haima',
        link: '',
      },
      {
        title: 'Haval',
        link: '',
      },
      {
        title: 'Hino',
        link: '',
      },
      {
        title: 'Holden',
        link: '',
      },
      {
        title: 'Honda',
        link: '',
      },
      {
        title: 'Hongqi',
        link: '',
      },
      {
        title: 'Hummer',
        link: '',
      },
      {
        title: 'Hyundai',
        link: '',
      },
    ],
    [
      {
        title: 'Infiniti',
        link: '',
      },
      {
        title: 'Isuzu',
        link: '',
      },
      {
        title: 'Iveco',
        link: '',
      },
    ],
    [
      {
        title: 'JAC',
        link: '',
      },
      {
        title: 'Jaguar',
        link: '',
      },
      {
        title: 'Jeep',
        link: '',
      }
    ],
    [
      {
        title: 'Kia',
        link: '',
      }
    ],
    [
      {
        title: 'Lancia',
        link: '',
      },
      {
        title: 'Land Rover',
        link: '',
      },
      {
        title: 'Leopaard',
        link: '',
      },
      {
        title: 'Lexus',
        link: '',
      },
      {
        title: 'Lincoln',
        link: '',
      },
      {
        title: 'Lotus',
        link: '',
      },
      {
        title: 'Luxgen',
        link: '',
      }
    ],
    [
      {
        title: 'Maserati',
        link: '',
      },
      {
        title: 'Mazda',
        link: '',
      },
      {
        title: 'Mercedes',
        link: '',
      },
      {
        title: 'Mercury',
        link: '',
      },
      {
        title: 'MG',
        link: '',
      },
      {
        title: 'Mini',
        link: '',
      },
      {
        title: 'Mitsubishi',
        link: '',
      },
      {
        title: 'Mitsubishi Fuso',
        link: '',
      },
      {
        title: 'Morgan',
        link: '',
      },
      
    ],
    [
      {
        title: 'Nissan',
        link: '',
      },
    ],
    [
      {
        title: 'Oldsmobile',
        link: '',
      },
      {
        title: 'Opel',
        link: '',
      },
    ],
    [
      {
        title: 'Peugeot',
        link: '',
      },
      {
        title: 'Plymouth',
        link: '',
      },
      {
        title: 'Pontiac',
        link: '',
      },
      {
        title: 'Porsche',
        link: '',
      },
      {
        title: 'Proton',
        link: '',
      },
    ],
    [
      {
        title: 'Ram',
        link: '',
      },
      {
        title: 'Renault',
        link: '',
      },
      {
        title: 'Roewe',
        link: '',
      },],
    [
      {
        title: 'Saab',
        link: '',
      },
      {
        title: 'Saturn',
        link: '',
      },
      {
        title: 'Scania',
        link: '',
      },
      {
        title: 'Scion',
        link: '',
      },
      {
        title: 'Seat',
        link: '',
      },
      {
        title: 'Skoda',
        link: '',
      },
      {
        title: 'Smart',
        link: '',
      },
      {
        title: 'SRT',
        link: '',
      },
      {
        title: 'Ssangyong',
        link: '',
      },
      {
        title: 'Subaru',
        link: '',
      },
      {
        title: 'Suzuki',
        link: '',
      },
    ],
    [
      {
        title: 'Tobe',
        link: '',
      },
      {
        title: 'Toyota',
        link: '',
      },
      {
        title: 'Trumpchi',
        link: '',
      },
    ],
    [
      {
        title: 'Venucia',
        link: '',
      },
      {
        title: 'Volkswagen',
        link: '',
      },
      {
        title: 'Volvo',
        link: '',
      },
    ],
    [
      {
        title: 'Zotye',
        link: '',
      }
    ],
  ],

  navItems: [
    {
      slug: 'footer.moreNews',
      href: '/',
    },
    {
      slug: 'footer.contacts',
      href: CONTACT_US,
    },
    {
      slug: 'footer.policy',
      href: PRIVACY,
    },
    {
      slug: 'footer.resellers',
      href: RESELLERS,
    },
  ],

  socials: [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/montechiptuning',
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/montetuning/',
    },
    {
      name: 'youtube',
      href: 'https://www.youtube.com/channel/UCjM-Mm366QrmPoWDz2ARSDg',
    },
  ],

  paymentIcons,
}
