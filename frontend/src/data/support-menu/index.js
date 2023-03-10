const {
  SUPPORT_GTR,
  SUPPORT_WARRANTY,
  SUPPORT_INSTALLATION,
  SUPPORT_ADJUSTMENT,
} = require('../routes')

module.exports = {
  items: [
    {
      icon: 'monte-gtr',
      label: 'supportMenu.gtr',
      slug: SUPPORT_GTR,
    },
    {
      icon: 'return-box',
      label: 'supportMenu.warranty',
      slug: SUPPORT_WARRANTY,
    },
    {
      icon: 'gear',
      label: 'supportMenu.installation',
      slug: SUPPORT_INSTALLATION,
    },
    {
      icon: 'return-circled',
      label: 'supportMenu.adjustment',
      slug: SUPPORT_ADJUSTMENT,
    },
  ],
}
