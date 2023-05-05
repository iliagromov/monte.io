const {
  MONTE_GT,
  CONTACT_US,
  SUPPORT_GTR,
  STORE,
  NEWS
} = require('../routes')

module.exports = [
  {
    label: 'menu.products',
    slug: MONTE_GT,
  },
  {
    label: 'menu.support',
    slug: SUPPORT_GTR,
  },
  {
    label: 'menu.contacts',
    slug: CONTACT_US,
  },
  {
    label: 'menu.news',
    slug: NEWS,
  },
  /*uncomment after calculator fix*/
  /**/ {
    label: 'menu.calculator',
    slug: '#',
    mod: 'calculator',
  },
  {
    label: 'menu.store',
    slug: STORE,
    mod: 'button',
  },
]
