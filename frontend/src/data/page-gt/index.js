const { productIds } = require('../../types/product')
const { getProductById } = require('../../utils')
const { STORE, CONTACT_US } = require('../routes')

const productId = productIds.gt
const monteGT = getProductById(productId)
// const demoText = 'pageGT.oddsUpToText'

module.exports = {
  product: {
    id: monteGT.id,
    // price: monteGT.price,
    title: 'pageGT.introdcuingNew',
    descr: 'pageGT.customise',
    btnText: 'pageGT.addTo',
    btnHref: STORE,
    advantages: [
      {
        icon: 'increase',
        text: 'pageGT.upTo',
      },
      {
        icon: 'fuel',
        text: 'pageGT.fuelSaving',
      },
      {
        icon: 'obd',
        text: 'pageGT.obd',
      },
      {
        icon: 'smartphone',
        text: 'pageGT.app',
      },
    ],
    featuresList: [
      {
        id: 'featuresList1',
        text: 'products.featuresList1',
      },
      {
        id: 'featuresList2',
        text: 'products.featuresList2',
      },
      {
        id: 'featuresList3',
        text: 'products.featuresList3',
      },
      {
        id: 'featuresList4',
        text: 'products.featuresList4',
      },
      {
        id: 'featuresList5',
        text: 'products.featuresList5',
      },
      {
        id: 'featuresList6',
        text: 'products.featuresList6',
      },
      {
        id: 'featuresList7',
        text: 'products.featuresList7',
      },
      {
        id: 'featuresList8',
        text: 'products.featuresList8',
      },
      {
        id: 'featuresList9',
        text: 'products.featuresList9',
      },
    ],
  },

  performance: {
    model: 'Select from 6 driving modes: RACE +, RACE, MIX or ECO I or ECO II.',
    title: 'pageGT.performance',
    btnText: 'pageGT.calculateYour',
    productLabel: 'pageGT.withMonte',
    btnHref: '/',
    hp: 210,
    nm: 235,
    // hpGain: getCarPowerGain({ value: 469, monteGT, type: 'hp' }),
    // nmGain: getCarPowerGain({ value: 649, monteGT, type: 'nm' }),
    //FIXME: сделать через функцию getCarPowerGain
    hpGain: 21,
    nmGain: 22,
  },

  appUi: {
    title: 'pageGT.everythingYou',
    text: 'pageGT.introducingMonte',
    items: [
      {
        id: 'vehicle',
        title: 'pageGT.switchBetween',
        text: 'pageGT.controlYour',
      },
      {
        id: 'unlimited',
        title: 'pageGT.unlimitedUse',
        text: 'pageGT.uploadYour',
      },
      {
        id: 'speed',
        title: 'pageGT.watchSpeed',
        text: 'pageGT.keepTrack',
      },
      {
        id: 'pairing',
        title: 'pageGT.easyPairing',
        text: 'pageGT.lightningFast',
      },
    ],
  },

  odds: {
    title: 'pageGT.hereIsWhy',
    items: [
      {
        icon: 'motor',
        title: 'pageGT.oddsUpTo',
        text: 'pageGT.oddsUpTo.text',
      },
      {
        icon: 'drop',
        title: 'pageGT.oddsFuelSaving',
        text: 'pageGT.oddsFuelSaving.text',
      },
      {
        icon: 'steering-wheel',
        title: 'pageGT.3drivenModes',
        text: 'pageGT.3drivenModes.text',
      },
      {
        icon: 'shield-checkmark',
        title: 'pageGT.dynoProven',
        text: 'pageGT.dynoProven.text',
      },
      {
        icon: 'smartphone-filled',
        title: 'pageGT.easyToInstall',
        text: 'pageGT.easyToInstall.text',
      },
      {
        icon: 'infinity',
        title: 'pageGT.lifetime',
        text: 'pageGT.lifetime.text',
      },
    ],
  },

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

  slider: {
    images: [
      {
        srcset: {
          desktop: '/img/gt-slide-1.png',
          mobile: '/img/gt-slide-1-mobile.png',
        },
      },
      {
        srcset: {
          desktop: '/img/gt-slide-2.png',
          mobile: '/img/gt-slide-2-mobile.png',
        },
      },
      {
        srcset: {
          desktop: '/img/gt-slide-3.png',
          mobile: '/img/gt-slide-3-mobile.png',
        },
      },
      {
        srcset: {
          desktop: '/img/gt-slide-4.png',
          mobile: '/img/gt-slide-4-mobile.png',
        },
      },
      {
        srcset: {
          desktop: '/img/gt-slide-5.png',
          mobile: '/img/gt-slide-5-mobile.png',
        },
      },
      {
        srcset: {
          desktop: '/img/gt-slide-6.png',
          mobile: '/img/gt-slide-6-mobile.png',
        },
      },
      {
        srcset: {
          desktop: '/img/gt-slide-7.png',
          mobile: '/img/gt-slide-7-mobile.png',
        },
      },
      {
        srcset: {
          desktop: '/img/gt-slide-8.png',
          mobile: '/img/gt-slide-8-mobile.png',
        },
      },
      {
        srcset: {
          desktop: '/img/gt-slide-9.png',
          mobile: '/img/gt-slide-9-mobile.png',
        },
      },
      {
        srcset: {
          desktop: '/img/gt-slide-10.png',
          mobile: '/img/gt-slide-10-mobile.png',
        },
      },
      {
        srcset: {
          desktop: '/img/gt-slide-11.png',
          mobile: '/img/gt-slide-11-mobile.png',
        },
      },
    ],
  },

  gallaryCard: {
    images: [
      {
        srcset: {
          desktop: '/img/monte-gt.png',
          desktop2x: '/img/monte-gt@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-2.png',
          desktop2x: '/img/monte-gt-2@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-3.png',
          desktop2x: '/img/monte-gt-3@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-4.png',
          desktop2x: '/img/monte-gt-4@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-5.png',
          desktop2x: '/img/monte-gt-5@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-6.png',
          desktop2x: '/img/monte-gt-6@2x.png',
        },
      },
    ],
  },

  productCard: {
    contactsLink: CONTACT_US,
    images: [
      {
        srcset: {
          desktop: '/img/monte-gt.png',
          desktop2x: '/img/monte-gt@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-2.png',
          desktop2x: '/img/monte-gt-2@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-3.png',
          desktop2x: '/img/monte-gt-3@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-4.png',
          desktop2x: '/img/monte-gt-4@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-5.png',
          desktop2x: '/img/monte-gt-5@2x.png',
        },
      },
      {
        srcset: {
          desktop: '/img/monte-gt-6.png',
          desktop2x: '/img/monte-gt-6@2x.png',
        },
      },
    ],
  },
  faqSection: {
    title: 'pageGT.topQuestions',
    items: [
      {
        header: 'pageGT.faq1header',
        content: 'pageGT.faq1content',
      },
      {
        header: 'pageGT.faq2header',
        content: 'pageGT.faq2content',
      },
      {
        header: 'pageGT.faq3header',
        content: 'pageGT.faq3content',
      },
      {
        header: 'pageGT.faq4header',
        content: 'pageGT.faq4content',
      },
      {
        header: 'pageGT.faq5header',
        content: 'pageGT.faq5content',
      },
      {
        header: 'pageGT.faq6header',
        content: 'pageGT.faq6content',
      },
      {
        header: 'pageGT.faq7header',
        content: 'pageGT.faq7content',
      },
      {
        header: 'pageGT.faq8header',
        content: 'pageGT.faq8content',
      },
    ],
  },

  techSpecs: {
    title: 'pageGT.techSpecs',
    groups: [
      {
        title: 'pageGT.perfomanceFigures',
        info: 'pageGT.perfomanceFiguresText',
      },
      {
        title: 'pageGT.warrantyReturn',
        info: 'pageGT.warrantyReturnText',
      },
      {
        title: 'pageGT.software',
        info: 'pageGT.softwareText',
      },
      {
        title: 'pageGT.hardware',
        info: 'pageGT.hardwareText',
      },
      {
        title: 'pageGT.dimension',
        info: 'pageGT.dimensionText',
      },
      {
        title: 'pageGT.inTheBox',
        info: 'pageGT.inTheBoxText',
      },
    ],
  },

  votes: [
    {
      rating: 5,
      count: 1902,
    },
    {
      rating: 4,
      count: 404,
    },
    {
      rating: 3,
      count: 212,
    },
  ],

  reviews: [
    {
      author: 'Ben Smith',
      date: '3 september',
      rating: 4,
      text: 'pageGT.reviewTextBen',
    },
    {
      author: 'Elly',
      date: '4 september',
      rating: 5,
      text: 'pageGT.reviewTextElly',
    },
  ],

  performanceCharts: {
    title: 'pageGT.performanceAndEfficiency',
    text: 'pageGT.selectDrivingModes',
    carInfo: 'pageGT.mercedesRaceMode',
    nmAxisTitle: 'pageGT.chartsNmTitle',
    hpAxisTitle: 'pageGT.chartsHpTitle',
    modes: [
      {
        id: 'economy2',
        title: 'Economy II',
        img: `/img/performance-charts-gt-economy-2.png`,
        data: [
          { rpm: 1500, nm: 130, hp: 116 },
          { rpm: 2000, nm: 135, hp: 121 },
          { rpm: 2500, nm: 145, hp: 130 },
          { rpm: 3000, nm: 164, hp: 147 },
          { rpm: 3500, nm: 175, hp: 156 },
          { rpm: 4000, nm: 180, hp: 161 },
          { rpm: 4500, nm: 200, hp: 179 },
          { rpm: 5000, nm: 235, hp: 210 },
          { rpm: 5500, nm: 225, hp: 201 },
          { rpm: 6000, nm: 201, hp: 180 },
        ],
      },
      {
        id: 'economy',
        title: 'Economy',
        img: `/img/performance-charts-gt-economy.png`,
        data: [
          { rpm: 1500, nm: 130, hp: 116 },
          { rpm: 2000, nm: 135, hp: 121 },
          { rpm: 2500, nm: 145, hp: 130 },
          { rpm: 3000, nm: 164, hp: 147 },
          { rpm: 3500, nm: 175, hp: 156 },
          { rpm: 4000, nm: 180, hp: 161 },
          { rpm: 4500, nm: 200, hp: 179 },
          { rpm: 5000, nm: 235, hp: 210 },
          { rpm: 5500, nm: 225, hp: 201 },
          { rpm: 6000, nm: 201, hp: 180 },
        ],
      },
      {
        id: 'stock',
        title: 'Stock',
        img: `/img/performance-charts-gt-stock.png`,
        data: [
          { rpm: 1500, nm: 130, hp: 116 },
          { rpm: 2000, nm: 135, hp: 121 },
          { rpm: 2500, nm: 145, hp: 130 },
          { rpm: 3000, nm: 164, hp: 147 },
          { rpm: 3500, nm: 175, hp: 156 },
          { rpm: 4000, nm: 180, hp: 161 },
          { rpm: 4500, nm: 200, hp: 179 },
          { rpm: 5000, nm: 235, hp: 210 },
          { rpm: 5500, nm: 225, hp: 201 },
          { rpm: 6000, nm: 201, hp: 180 },
        ],
      },

      {
        id: 'mix',
        title: 'Mix',
        img: `/img/performance-charts-gt-mix.png`,
        data: [
          { rpm: 1500, nm: 130, nmBoosted: 135, hp: 116, hpBoosted: 121 },
          { rpm: 2000, nm: 135, nmBoosted: 143, hp: 121, hpBoosted: 125 },
          { rpm: 2500, nm: 145, nmBoosted: 155, hp: 130, hpBoosted: 138 },
          { rpm: 3000, nm: 164, nmBoosted: 176, hp: 147, hpBoosted: 158 },
          { rpm: 3500, nm: 175, nmBoosted: 191, hp: 156, hpBoosted: 172 },
          { rpm: 4000, nm: 180, nmBoosted: 197, hp: 161, hpBoosted: 183 },
          { rpm: 4500, nm: 200, nmBoosted: 222, hp: 179, hpBoosted: 206 },
          { rpm: 5000, nm: 235, nmBoosted: 257, hp: 210, hpBoosted: 231 },
          { rpm: 5500, nm: 225, nmBoosted: 243, hp: 201, hpBoosted: 226 },
          { rpm: 6000, nm: 201, nmBoosted: 220, hp: 180, hpBoosted: 198 },
        ],
      },

      {
        id: 'race',
        title: 'Race',
        img: `/img/performance-charts-gt-race.png`,
        data: [
          { rpm: 1500, nm: 135, nmBoosted: 120, hp: 147, hpBoosted: 123 },
          { rpm: 2000, nm: 143, nmBoosted: 125, hp: 154, hpBoosted: 127 },
          { rpm: 2500, nm: 155, nmBoosted: 138, hp: 155, hpBoosted: 139 },
          { rpm: 3000, nm: 175, nmBoosted: 158, hp: 175, hpBoosted: 158 },
          { rpm: 3500, nm: 190, nmBoosted: 172, hp: 189, hpBoosted: 172 },
          { rpm: 4000, nm: 197, nmBoosted: 183, hp: 195, hpBoosted: 182 },
          { rpm: 4500, nm: 221, nmBoosted: 205, hp: 218, hpBoosted: 198 },
          { rpm: 5000, nm: 257, nmBoosted: 231, hp: 244, hpBoosted: 219 },
          { rpm: 5500, nm: 242, nmBoosted: 225, hp: 238, hpBoosted: 217 },
          { rpm: 6000, nm: 220, nmBoosted: 197, hp: 212, hpBoosted: 190 },
        ],
      },
      {
        id: 'race2',
        title: 'Race II',
        img: `/img/performance-charts-gt-race2.png`,
        data: [
          { rpm: 1500, nm: 130, nmBoosted: 135, hp: 116, hpBoosted: 121 },
          { rpm: 2000, nm: 135, nmBoosted: 143, hp: 121, hpBoosted: 125 },
          { rpm: 2500, nm: 145, nmBoosted: 155, hp: 130, hpBoosted: 138 },
          { rpm: 3000, nm: 164, nmBoosted: 176, hp: 147, hpBoosted: 158 },
          { rpm: 3500, nm: 175, nmBoosted: 191, hp: 156, hpBoosted: 172 },
          { rpm: 4000, nm: 180, nmBoosted: 197, hp: 161, hpBoosted: 183 },
          { rpm: 4500, nm: 200, nmBoosted: 222, hp: 179, hpBoosted: 206 },
          { rpm: 5000, nm: 235, nmBoosted: 257, hp: 210, hpBoosted: 231 },
          { rpm: 5500, nm: 225, nmBoosted: 243, hp: 201, hpBoosted: 226 },
          { rpm: 6000, nm: 201, nmBoosted: 220, hp: 180, hpBoosted: 198 },
        ],
      },
    ],
  },
}
