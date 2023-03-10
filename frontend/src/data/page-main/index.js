const { productsWithFeatures } = require('../products')
const { MONTE_GTR } = require('../routes')

module.exports = {
  hero: {
    title: 'pageMain.heroTitle',
    subtitle: 'pageMain.heroSubTitle',
    description: 'pageMain.heroDescripton',
  },
  btnText: 'pageMain.learnMore',
  btnHref: MONTE_GTR,

  advantages: {
    titleText: 'pageMain.advantagesTitle',
    items: [
      {
        icon: 'speedometer',
        titleText: 'pageMain.advPowerTitle',
        descr: 'pageMain.advPowerDescr',
        linkText: 'pageMain.advPowerLink',
        linkSlug: '/products/monte-gt/',
      },
      {
        icon: 'monitor',
        titleText: 'pageMain.advDiagnosticTitle',
        descr: 'pageMain.advDiagnosticDescr',
        linkText: 'pageMain.advDiagnosticLink',
        linkSlug: '/products/monte-gt/',
      },
      {
        icon: 'fuel',
        titleText: 'pageMain.advFuelTitle',
        descr: 'pageMain.advFuelDescr',
        linkText: 'pageMain.advFuelLink',
        linkSlug: '/products/monte-gt/',
      },
    ],
  },

  installVideo: {
    title: 'Easy to install in less than 5 minutes',
    youTubeId: 'GrVJ9KWSmS8',
  },

  programmer: {
    features: [
      {
        icon: 'infinity-outline',
        text: 'pageMain.8000SupportedCars',
      },
      {
        icon: 'cloud-updates',
        text: 'pageMain.lifetimeUpdates',
      },
      {
        icon: 'car-feature',
        text: 'pageMain.unrestrictedAccess',
      },
    ],
    btnText: 'pageMain.downloadProgrammer',
    fileLink: '/products/monte-gtr/',
    infoText: ' ',
  },
  products: productsWithFeatures,

  edge: {
    items: [
      {
        icon: 'obd',
        title: 'pageMain.obdInstallation',
        descr: 'pageMain.noSpecialAutomotive',
        linkHref: '/',
      },
      {
        icon: 'swap',
        title: 'pageMain.transferableAndReusable',
        descr: 'pageMain.changeVehicle',
        linkHref: '/',
      },
      {
        icon: 'usa-flag',
        title: 'pageMain.productOfUSA',
        descr: 'pageMain.designedAndEngineered',
        linkHref: '/',
      },
      {
        icon: 'shield-checkmark',
        title: 'pageMain.satisfactionGuaranteed',
        descr: 'pageMain.hassleFree',
        linkHref: '/',
      },
    ],
  },

  faqSection: {
    title: 'pageMain.topQuestions',
    items: [
      {
        header: 'pageMain.faq1header',
        content: 'pageMain.faq1content',
      },
      {
        header: 'pageMain.faq2header',
        content: 'pageMain.faq2content',
      },
      {
        header: 'pageMain.faq3header',
        content: 'pageMain.faq3content',
      },
      {
        header: 'pageMain.faq4header',
        content: 'pageMain.faq4content',
      },
      {
        header: 'pageMain.faq5header',
        content: 'pageMain.faq5content',
      },
      {
        header: 'pageMain.faq6header',
        content: 'pageMain.faq6content',
      },
    ],
  },

  news: {
    title: 'pageMain.monteNews',
    items: [
      {
        img: '/img/img-new-1.png',
        title: 'Abarth Tested with Monte GTR',
        text:
          'Watch Abarth tested on the dyno several times with and without Monte GTR.',
        link: 'https://www.youtube.com/watch?v=YWZk9f8AD9s',
        date: '09/25/2021',
      },
      {
        img: '/img/img-new-2.png',
        title: 'GTR tested by Carnews Taiwan',
        text:
          'Monte GTR Testeted and explained by the Taiwanese motor journalists.',
        link: 'https://www.youtube.com/watch?v=ILkxUvJh3Pc',
        date: '09/25/2021',
      },
      {
        img: '/img/img-new-3.png',
        title: 'Watch Monte GTR features video',
        text: 'Learn more about Monte GTR and its features.',
        link: 'https://www.youtube.com/watch?v=gAe6y6PzWZg&t=2s',
        date: '09/25/2021',
      },
      {
        img: '/img/img-new-4.png',
        title: 'Video installation guide for GTR ',
        text: 'Easy installation in less than 5 minutes. Learn how, here. ',
        link: 'https://www.youtube.com/watch?v=PLmjexxCssc',
        date: '09/25/2021',
      },
    ],
  },
}
