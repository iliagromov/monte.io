const heading = 'feedBackPopup.heading'
const { addressCoors } = require('../address-map')
const { email, phone } = require('../contacts')

const whatsAppButton = {
  text: 'feedBackPopup.whatsAppText',
  href:
    'https://wa.me/15012040005?text=Hello!%20I%20am%20interested%20in%20your%20product',
}

const contacts = [
  {
    type: 'mail',
    iconName: 'mail',
    mail: email,
  },
  {
    type: 'tel',
    iconName: 'phone',
    phone: phone,
  },
  {
    type: 'address',
    iconName: 'location',
    // todo: использовать общий адрес
    addressText: 'feedBackPopup.address',
    coors: addressCoors,
  },
  {
    type: 'info',
    iconName: 'clock-4-hours',
    text: 'feedBackPopup.info1',
  },
  {
    type: 'info',
    iconName: 'chat-contour',
    text: 'feedBackPopup.info2',
  },
]

module.exports = {
  heading,
  whatsAppButton,
  contacts,
}
