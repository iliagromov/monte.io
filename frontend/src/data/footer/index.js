const { CONTACT_US, PRIVACY, RESELLERS } = require('../routes')
const { paymentIcons } = require('../payment-icons')

module.exports = {
  models: [
    ['Acura', 'Aeolus', 'Alfa Romeo', 'AM General', 'Aston Martin', 'Audi'],
    [
      'BAIC Motor',
      'Baojun',
      'Bentley',
      'BMW',
      'Borgward',
      'Brilliance',
      'Buick',
      'BYD',
    ],
    ['Cadillac', 'Chevrolet', 'Chrysler', 'Citroen'],
    ['Daewoo', 'Daihatsu', 'DFSK', 'Dodge'],
    ['Eagle'],
    ['FAW', 'Fiat', 'Ford', 'Futon'],
    ['Geely', 'Genesis', 'Geo', 'Giant Motors', 'GMC'],
    [
      'Haima',
      'Haval',
      'Hino',
      'Holden',
      'Honda',
      'Hongqi',
      'Hummer',
      'Hyundai',
    ],
    ['Infiniti', 'Isuzu', 'Iveco'],
    ['JAC', 'Jaguar', 'Jeep'],
    ['Kia'],
    ['Lancia', 'Land Rover', 'Leopaard', 'Lexus', 'Lincoln', 'Lotus', 'Luxgen'],
    [
      'Maserati',
      'Mazda',
      'Mercedes',
      'Mercury',
      'MG',
      'Mini',
      'Mitsubishi',
      'Mitsubishi Fuso',
      'Morgan',
    ],
    ['Nissan'],
    ['Oldsmobile', 'Opel'],
    ['Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'Proton'],
    ['Ram', 'Renault', 'Roewe'],
    [
      'Saab',
      'Saturn',
      'Scania',
      'Scion',
      'Seat',
      'Skoda',
      'Smart',
      'SRT',
      'Ssangyong',
      'Subaru',
      'Suzuki',
    ],
    ['Tobe', 'Toyota', 'Trumpchi'],
    ['Venucia', 'Volkswagen', 'Volvo'],
    ['Zotye'],
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
