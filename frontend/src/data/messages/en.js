const footer = require('../footer/en')
const menu = require('../menu/en')
const productsMenu = require('../products-menu/en')
const aboutMenu = require('../about-menu/en')
const pageMain = require('../page-main/en')
const warrantyReturn = require('../warranty-return/en')
const subscribe = require('../subscribe/en')
const pageGt = require('../page-gt/en')
const pageGtr = require('../page-gtr/en')
const pageChipsCompare = require('../page-chips-compare/en')
const pageCart = require('../page-cart/en')
const products = require('../products/en')
const cartContainer = require('../cart-container/en')
const contacts = require('../contacts/en')
const pageContactUs = require('../page-contact-us/en')
const pageResellers = require('../page-resellers/en')
const pageAboutOurProducts = require('../page-about-our-products/en')
const checkoutForm = require('../checkout-form/en')
const supportMenu = require('../support-menu/en')
const pageSupportGTR = require('../page-support-gtr/en')
const pageSupportAdjustment = require('../page-support-adjustment/en')
const pageSupportWarranty = require('../page-support-warranty/en')
const pageSupportInstallation = require('../page-support-installation/en')
const feedBackPopup = require('../feed-back-popup/en')
const discountForm = require('../discount-form/en')
const pagePrivacy = require('../page-privacy/en')
const navigationBackButton = require('../navigation-back-button/en')
const pageStore = require('../page-store/en')
const disclaimer = require('../disclaimer/en')
const gainCalculator = require('../gain-calculator/en')
const performanceGain = require('../performance-gain/en')
const pageManual = require('../page-manual/en')
const pageErrorPayment = require('../page-error-payment/en')
const pageSuccessPayment = require('../page-success-payment/en')

module.exports = {
  readMore: 'Read more',
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
  ...pageSupportAdjustment,
  ...pageSupportInstallation,
  ...feedBackPopup,
  ...discountForm,
  ...pagePrivacy,
  ...navigationBackButton,
  ...pageStore,
  ...disclaimer,
  ...gainCalculator,
  ...performanceGain,
  ...pageManual,
  ...pageErrorPayment,
  ...pageSuccessPayment,
}
