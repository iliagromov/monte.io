const { CONTACT_US } = require('../routes')

module.exports = {
  appButtons: {
    title: 'pageGT.downloadApp',
    links: [
      {
        type: 'google-play',
        href:
          'https://play.google.com/store/apps/details?id=com.montetuning.monte',
      },
      {
        type: 'app-store',
        href: 'https://apps.apple.com/us/app/monte-gt/id1582142065',
      },
    ],
  },

  productCard: {
    contactsLink: CONTACT_US,
    images: [
      {
        srcset: {
          desktop: '/img/monte-gt-yellow.png',
          desktop2x: '/img/monte-gt-yellow@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-yellow.png',
          desktop2x: '/img/monte-gt-yellow@2x.png',
        },
      },
    ],
  },
}
