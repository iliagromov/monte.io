const footer = require('../footer/es')
const menu = require('../menu/es')
const productsMenu = require('../products-menu/es')
const aboutMenu = require('../about-menu/es')
const pageMain = require('../page-main/es')
const warrantyReturn = require('../warranty-return/es')
const subscribe = require('../subscribe/es')
const pageGt = require('../page-gt/es')
const pageGtr = require('../page-gtr/es')
const pageChipsCompare = require('../page-chips-compare/es')
const pageCart = require('../page-cart/es')
const products = require('../products/es')
const cartContainer = require('../cart-container/es')
const contacts = require('../contacts/es')
const pageContactUs = require('../page-contact-us/es')
const pageResellers = require('../page-resellers/es')
const pageAboutOurProducts = require('../page-about-our-products/es')
const checkoutForm = require('../checkout-form/es')
const supportMenu = require('../support-menu/es')
const pageSupportGTR = require('../page-support-gtr/es')
const pageSupportWarranty = require('../page-support-warranty/es')
const pageSupportInstallation = require('../page-support-installation/es')
const discountForm = require('../discount-form/es')
const pagePrivacy = require('../page-privacy/es')
const navigationBackButton = require('../navigation-back-button/es')
const feedBackPopup = require('../feed-back-popup/es')
const pageStore = require('../page-store/es')
const disclaimer = require('../disclaimer/es')
const gainCalculator = require('../gain-calculator/es')
const performanceGain = require('../performance-gain/es')
const pageManual = require('../page-manual/es')
const pageErrorPayment = require('../page-error-payment/es')
const pageSuccessPayment = require('../page-success-payment/es')

module.exports = {
  readMore: 'Lee mas',
  ...footer,
  ...menu,
  ...productsMenu,
  ...aboutMenu,
  ...warrantyReturn,
  ...subscribe,
  ...pageMain,
  ...pageGt,
  ...pageGtr,
  ...pageChipsCompare,
  ...pageCart,
  ...products,
  ...cartContainer,
  ...contacts,
  ...pageContactUs,
  ...pageResellers,
  ...pageAboutOurProducts,
  ...checkoutForm,
  ...supportMenu,
  ...pageSupportGTR,
  ...pageSupportWarranty,
  ...pageSupportInstallation,
  ...discountForm,
  ...pagePrivacy,
  ...navigationBackButton,
  ...feedBackPopup,
  ...pageStore,
  ...disclaimer,
  ...gainCalculator,
  ...performanceGain,
  ...pageManual,
  ...pageErrorPayment,
  ...pageSuccessPayment,
}
