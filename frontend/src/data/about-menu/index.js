const { ROOT, OUR_PRODUCTS, ABOUT } = require('../routes')

module.exports = {
  items: [
    {
      icon: 'info',
      label: 'aboutMenu.about',
      slug: ABOUT,
    },
    {
      icon: 'fuel-outline',
      label: 'aboutMenu.fuelSaving',
      slug: ROOT,
    },
    {
      icon: 'monte-gt',
      label: 'aboutMenu.ourProducts',
      slug: OUR_PRODUCTS,
    },
  ],
}
