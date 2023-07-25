const { email, phone, address } = require('../contacts')
const { addressCoors } = require('../address-map')

module.exports = {
  greeting: {
    title: 'pageContactUs.welcome',
    text: 'pageContactUs.happyToHelp',
    sign: 'pageContactUs.sign',
  },

  mapSection: {
    title: 'pageContactUs.contactUs',
    subTitle: 'pageContactUs.questions',
    actionTitle: 'pageContactUs.emailUs',
    email: email,
    phone: phone,
    address: address,
    addressCoors: addressCoors,
  },

  bannerData: {
    title: 'pageContactUs.bannerTitle',
  },
}
