const { productsExtendedInfo, productsWithFeatures } = require('../products')

module.exports = {
  productsExtendedInfo,
  promo: {
    heading: 'pageAboutOurProducts.promoHeading',
    text: 'pageAboutOurProducts.promoText',
  },
  features: [
    {
      iconName: 'car-feature',
      textId: 'productFeaturesList.carFeature',
    },
    {
      iconName: 'processor-feature',
      textId: 'productFeaturesList.processorsFeature',
    },
    {
      iconName: 'app-feature',
      textId: 'productFeaturesList.appFeature',
    },
    {
      iconName: 'cloud-feature',
      textId: 'productFeaturesList.cloudFeature',
    },
  ],
  compareProducts: {
    title: 'pageAboutOurProducts.compareTitle',
    products: productsWithFeatures,
  },
}
