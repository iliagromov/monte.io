const { productIds } = require('../../types/product')
const { MONTE_GT, MONTE_GTR } = require('../routes')

const products = [
  {
    id: productIds.gt,
    title: 'Monte GT',
    descr: 'products.productGTDescr',
    // цену теперь запрашиваем с сервера и кладём в стор
    // price: 349,
    power: '10-20',
    fuelSaving: '5-10',
    pageLink: MONTE_GT,
    img: {},
    hp: {
      percent: 10,
      maxIncrease: 25,
    },
    nm: {
      percent: 13,
      maxIncrease: 47,
    },
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
  {
    id: productIds.gtr,
    title: 'Monte GTR',
    descr: 'products.productGTRDescr',
    // цену теперь запрашиваем с сервера и кладём в стор
    // price: 499,
    power: 25,
    fuelSaving: 18,
    pageLink: MONTE_GTR,
    img: {},
    hp: {
      percent: 13,
      maxIncrease: 33,
    },
    nm: {
      percent: 13,
      maxIncrease: 46,
    },
    featuresList: [
      {
        id: 'productGTRFeatureUpTo',
        text: 'products.productGTRFeatureUpTo',
      },
      {
        id: 'productGTRFeatureFuelSave',
        text: 'products.productGTRFeatureFuelSave',
      },
      {
        id: 'productGTRFeatureModes',
        text: 'products.productGTRFeatureModes',
      },
      {
        id: 'productGTRFeaturePc',
        text: 'products.productGTRFeaturePc',
      },
      {
        id: 'productGTRFeatureTouch',
        text: 'products.productGTRFeatureTouch',
      },
      {
        id: 'productGTRFeatureError',
        text: 'products.productGTRFeatureError',
      },
      {
        id: 'productGTRFeatureGauges',
        text: 'products.productGTRFeatureGauges',
      },
      {
        id: 'productGTRFeatureAcc',
        text: 'products.productGTRFeatureAcc',
      },
      {
        id: 'productGTRFeatureDyno',
        text: 'products.productGTRFeatureDyno',
      },
    ],
  },
]

module.exports = {
  products,
  productsWithProductLink: products.map(product => {
    return {
      ...product,
      moreLink: product.pageLink,
    }
  }),
  productsWithFeatures: products.map(product => {
    const isProductGt = product.id === productIds.gt
    return {
      ...product,
      isNeededBadgeOffset: !isProductGt,
      hasNewBadge: isProductGt,
      addToBagBtnText: 'products.addToBagBtnText',
      moreLink: product.pageLink,
    }
  }),
  productsExtendedInfo: [
    {
      ...products[0],
      descr: 'products.GTExtendedDescr',
      advantages: [
        {
          iconName: 'adv-app-controllable',
          text: 'products.appControllableAdv',
        },
        {
          iconName: 'adv-power-meter',
          text: 'products.accMeterAdv',
        },
      ],
    },
    {
      ...products[1],
      descr: 'products.GTRExtendedDescr',
      advantages: [
        {
          iconName: 'adv-display-card',
          text: 'products.displayCarReadingAdv',
        },
        {
          iconName: 'adv-error-code',
          text: 'products.errorCodeReaderAdv',
        },
        {
          iconName: 'adv-power-meter',
          text: 'products.accAndPowerReaderAdv',
        },
      ],
    },
  ],
}
