const { productIds } = require('../../types/product')
const { getProductById } = require('../../utils')
const { STORE, CONTACT_US } = require('../routes')

const gtrId = productIds.gtr
const monteGTR = getProductById(gtrId)
const videoIncreasePower = require('../../images/animations/videoIncreasePower.mp4')
const videoDrivingMode = require('../../images/animations/videoDrivingMode.mp4')
const videoReadError = require('../../images/animations/videoReadError.mp4')
const videoTestAcc = require('../../images/animations/videoTestAcc.mp4')
const videoMeasureYour = require('../../images/animations/videoMeasureYour.mp4')
const videoLiveGauges = require('../../images/animations/videoLiveGauges.mp4')

module.exports = {
  product: {
    id: monteGTR.id,
    price: monteGTR.price,
    title: 'pageGTR.introdcuing',
    descr: 'pageGTR.diagnostics',
    btnText: 'pageGTR.shopNow',
    btnHref: STORE,
    advantages: [],
  },

  boost: {
    title: 'pageGTR.boost.title',
    subTitle: 'pageGTR.boost.subTitle',
    items: [
      {
        percentage: '80',
        value: '+25%*',
        descr: 'pageGTR.boost.descr1',
      },
      {
        percentage: '80',
        value: '+25%*',
        descr: 'pageGTR.boost.descr2',
      },
      {
        percentage: '50',
        value: '+18%*',
        descr: 'pageGTR.boost.descr3',
      },
      {
        percentage: '20',
        value: '-1 sec*',
        descr: 'pageGTR.boost.descr4',
      },
    ],
  },

  chipUi: {
    items: [
      {
        id: 'increasePower',
        icon: 'fuel',
        title: 'pageGTR.increasePower',
        text: 'pageGTR.increasePowerText',
        imgSrc:
          'https://storage.yandexcloud.net/monte-storage/resources/images/chip-screens/increase-power.png',
        video: videoIncreasePower,
      },
      {
        id: 'drivingMode',
        icon: 'steering-wheel',
        title: 'pageGTR.drivingMode',
        text: 'pageGTR.drivingModeText',
        imgSrc:
          'https://storage.yandexcloud.net/monte-storage/resources/images/chip-screens/driving-mode.png',
        video: videoDrivingMode,
      },
      {
        id: 'readError',
        icon: 'search',
        title: 'pageGTR.readError',
        text: 'pageGTR.readErrorText',
        imgSrc:
          'https://storage.yandexcloud.net/monte-storage/resources/images/chip-screens/error-codes.png',
        video: videoReadError,
      },
      {
        id: 'testAcc',
        icon: 'adv-power-meter',
        title: 'pageGTR.testAcc',
        text: 'pageGTR.testAccText',
        imgSrc:
          'https://storage.yandexcloud.net/monte-storage/resources/images/chip-screens/acceleration-test.png',
        video: videoTestAcc,
      },
      {
        id: 'measureYour',
        icon: 'speedometer',
        title: 'pageGTR.measureYour',
        text: 'pageGTR.measureYourText',
        imgSrc:
          'https://storage.yandexcloud.net/monte-storage/resources/images/chip-screens/measure-hp.png',
        video: videoMeasureYour,
      },
      {
        id: 'liveGauges',
        icon: 'increase',
        title: 'pageGTR.liveGauges',
        text: 'pageGTR.liveGaugesText',
        imgSrc:
          'https://storage.yandexcloud.net/monte-storage/resources/images/chip-screens/live-gauges.png',
        video: videoLiveGauges,
      },
    ],
  },

  dyno: {
    title: 'pageGTR.yourPocketSized',
    text: 'pageGTR.onBoardDyno',
    features: [
      {
        icon: 'graph',
        text: 'pageGTR.compareUnlimited',
      },
      {
        icon: 'monitor-with-stand',
        text: 'pageGTR.transferAndShare',
      },
    ],
  },

  performance: {
    model: 'BMW 8 series 4.4L',
    title: 'pageGTR.performance',
    productLabel: 'pageGTR.withMonte',
    btnText: 'pageGTR.calculateYour',
    btnHref: '/',
    hp: 523,
    nm: 750,
    mph: 3.8,
    // hpGain: getCarPowerGain({ value: 523, monteGTR, type: 'hp' }),
    // nmGain: getCarPowerGain({ value: 750, monteGTR, type: 'nm' }),
    //FIXME: сделать через функцию getCarPowerGain
    hpGain: 47,
    nmGain: 61,
    mphGain: 0.62,
  },

  performanceCharts: {
    title: 'pageGTR.performanceTailored',
    text: 'pageGTR.selectFrom6',
    comparisonText: 'pageGTR.comparisonText',
    carInfo: 'pageGTR.carInfo',
    nmAxisTitle: 'pageGTR.chartsNmTitle',
    hpAxisTitle: 'pageGTR.chartsHpTitle',
    modes: [
      {
        id: 'economy',
        title: 'Economy',
        img: `https://storage.yandexcloud.net/monte-storage/resources/images/chip-screens/driving-mode-eco.png`,
        data: [
          { rpm: 1500, nm: 630, nmBoosted: 623, hp: 187, hpBoosted: 187 },
          { rpm: 2000, nm: 650, nmBoosted: 649, hp: 220, hpBoosted: 219 },
          { rpm: 2500, nm: 690, nmBoosted: 692, hp: 300, hpBoosted: 303 },
          { rpm: 3000, nm: 700, nmBoosted: 709, hp: 340, hpBoosted: 345 },
          { rpm: 3500, nm: 720, nmBoosted: 736, hp: 430, hpBoosted: 440 },
          { rpm: 4000, nm: 740, nmBoosted: 763, hp: 490, hpBoosted: 505 },
          { rpm: 4500, nm: 749, nmBoosted: 789, hp: 519, hpBoosted: 544 },
          { rpm: 5000, nm: 710, nmBoosted: 746, hp: 510, hpBoosted: 531 },
          { rpm: 5500, nm: 690, nmBoosted: 726, hp: 500, hpBoosted: 512 },
          { rpm: 6000, nm: 660, nmBoosted: 689, hp: 450, hpBoosted: 450 },
        ],
      },
      {
        id: 'sport',
        title: 'Sport',
        img: `https://storage.yandexcloud.net/monte-storage/resources/images/chip-screens/driving-mode-sport.png`,
        data: [
          { rpm: 1500, nm: 630, nmBoosted: 637, hp: 187, hpBoosted: 197 },
          { rpm: 2000, nm: 650, nmBoosted: 663, hp: 220, hpBoosted: 229 },
          { rpm: 2500, nm: 690, nmBoosted: 699, hp: 300, hpBoosted: 314 },
          { rpm: 3000, nm: 700, nmBoosted: 717, hp: 340, hpBoosted: 357 },
          { rpm: 3500, nm: 720, nmBoosted: 743, hp: 430, hpBoosted: 452 },
          { rpm: 4000, nm: 740, nmBoosted: 771, hp: 490, hpBoosted: 519 },
          { rpm: 4500, nm: 749, nmBoosted: 797, hp: 519, hpBoosted: 555 },
          { rpm: 5000, nm: 710, nmBoosted: 754, hp: 510, hpBoosted: 542 },
          { rpm: 5500, nm: 690, nmBoosted: 734, hp: 500, hpBoosted: 522 },
          { rpm: 6000, nm: 660, nmBoosted: 696, hp: 450, hpBoosted: 459 },
        ],
      },
      {
        id: 'race',
        title: 'Race',
        img: `https://storage.yandexcloud.net/monte-storage/resources/images/chip-screens/driving-mode-race.png`,
        data: [
          { rpm: 1500, nm: 630, nmBoosted: 656, hp: 187, hpBoosted: 194 },
          { rpm: 2000, nm: 650, nmBoosted: 689, hp: 220, hpBoosted: 231 },
          { rpm: 2500, nm: 690, nmBoosted: 738, hp: 300, hpBoosted: 320 },
          { rpm: 3000, nm: 700, nmBoosted: 750, hp: 340, hpBoosted: 367 },
          { rpm: 3500, nm: 720, nmBoosted: 785, hp: 430, hpBoosted: 474 },
          { rpm: 4000, nm: 740, nmBoosted: 811, hp: 490, hpBoosted: 558 },
          { rpm: 4500, nm: 749, nmBoosted: 830, hp: 519, hpBoosted: 597 },
          { rpm: 5000, nm: 710, nmBoosted: 778, hp: 510, hpBoosted: 583 },
          { rpm: 5500, nm: 690, nmBoosted: 744, hp: 500, hpBoosted: 562 },
          { rpm: 6000, nm: 660, nmBoosted: 687, hp: 450, hpBoosted: 495 },
        ],
      },
    ],
  },

  exposition: {
    title: 'pageGTR.DesignedFor',
    items: [
      {
        id: 'mount',
        title: 'pageGTR.MagnetMount',
        descr: 'pageGTR.metalDisk',
      },
      {
        id: 'cpus',
        title: 'pageGTR.CPUs',
        descr: 'pageGTR.dedicatedCPUs',
      },
      {
        id: 'storage',
        title: 'pageGTR.BultIn8GB',
        descr: 'pageGTR.storeYour',
      },
      {
        id: 'display',
        title: 'pageGTR.TouchScreen',
        descr: 'pageGTR.resistiveTouch',
      },
    ],
  },

  installation: {
    title: 'pageGTR.plug&play',
    steps: [
      {
        icon: 'monitor-with-stand',
        title: 'pageGTR.step1',
        descr: 'pageGTR.carAndMode',
      },
      {
        icon: 'obd',
        title: 'pageGTR.step2',
        descr: 'pageGTR.OBDii',
      },
      {
        icon: 'monte-gtr',
        title: 'pageGTR.step3',
        descr: 'pageGTR.newRide',
      },
    ],
  },

  promoVideo: {
    title: 'pageGTR.promoTitle',
    youTubeId: 'gAe6y6PzWZg',
  },

  installVideo: {
    title: 'pageGTR.installTitle',
    youTubeId: 'PLmjexxCssc',
  },

  programmer: {
    features: [
      {
        icon: 'infinity-outline',
        text: 'pageGTR.8000SupportedCars',
      },
      {
        icon: 'cloud-updates',
        text: 'pageGTR.lifetimeUpdates',
      },
      {
        icon: 'car-feature',
        text: 'pageGTR.unrestrictedAccess',
      },
    ],
    btnText: 'pageGTR.downloadProgrammer',
    fileLink: 'https://chqapps.blob.core.windows.net/monteprogrammer/setup.exe',
    infoText: 'pageGTR.requirements',
  },

  odds: {
    title: 'pageGTR.oddsTitle',
    items: [
      {
        icon: 'steering-wheel',
        title: 'pageGTR.drivingModes',
        text: 'pageGTR.drivingModesText',
      },
      {
        icon: 'adv-display-card',
        title: 'pageGTR.performanceTests',
        text: 'pageGTR.performanceTestsText',
      },
      {
        icon: 'monitor',
        title: 'pageGTR.gtrProgrammer',
        text: 'pageGTR.gtrProgrammerText',
      },
      {
        icon: 'smartphone-filled',
        title: 'pageGTR.easyInstall',
        text: 'pageGTR.easyInstallText',
      },
      {
        icon: 'speedometer',
        title: 'pageGTR.timeGauges',
        text: 'pageGTR.timeGaugesText',
      },
      {
        icon: 'motor',
        title: 'pageGTR.errorCodes',
        text: 'pageGTR.errorCodesText',
      },
      {
        icon: 'infinity',
        title: 'pageGTR.unlimitedUse',
        text: 'pageGTR.unlimitedUseText',
      },
      {
        icon: 'cloud-updates-filled',
        title: 'pageGTR.cloudUpdates',
        text: 'pageGTR.cloudUpdatesText',
      },
      {
        icon: 'processor-bold',
        title: 'pageGTR.3xCPUs',
        text: 'pageGTR.3xCPUsText',
      },
    ],
  },

  productCard: {
    contactsLink: CONTACT_US,
    images: [
      {
        src:
          'https://storage.yandexcloud.net/monte-storage/resources/images/gtr-product-slider/dyno.jpg',
      },
      {
        src:
          'https://storage.yandexcloud.net/monte-storage/resources/images/gtr-product-slider/eco-mode.jpg',
      },
      {
        src:
          'https://storage.yandexcloud.net/monte-storage/resources/images/gtr-product-slider/layouts.jpg',
      },
      {
        src:
          'https://storage.yandexcloud.net/monte-storage/resources/images/gtr-product-slider/in-control.jpg',
      },
      {
        src:
          'https://storage.yandexcloud.net/monte-storage/resources/images/gtr-product-slider/programmer.jpg',
      },
      {
        src:
          'https://storage.yandexcloud.net/monte-storage/resources/images/gtr-product-slider/brightness.jpg',
      },
      {
        src:
          'https://storage.yandexcloud.net/monte-storage/resources/images/gtr-product-slider/complectation.jpg',
      },
    ],
  },

  techSpecs: {
    title: 'pageGTR.techSpecs',
    groups: [
      {
        title: 'pageGTR.perfomanceFigures',
        info: 'pageGTR.perfomanceFiguresText',
      },
      {
        title: 'pageGTR.warrantyReturn',
        info: 'pageGTR.warrantyReturnText',
      },
      {
        title: 'pageGTR.software',
        info: 'pageGTR.softwareText',
      },
      {
        title: 'pageGTR.hardware',
        info: 'pageGTR.hardwareText',
      },
      {
        title: 'pageGTR.dimension',
        info: 'pageGTR.dimensionText',
      },
      {
        title: 'pageGTR.inTheBox',
        info: 'pageGTR.inTheBoxText',
      },
    ],
  },

  faqSection: {
    title: 'pageGTR.topQuestions',
    items: [
      {
        header: 'pageGTR.whatIsChip',
        content: 'pageGTR.smartTuningKit',
      },
      {
        header: 'pageGTR.howManyGauges',
        content: 'pageGTR.130Different',
      },
      {
        header: 'pageGTR.howOftenUpdates',
        content: 'pageGTR.weArePledged',
      },
      {
        header: 'pageGTR.isItSafe',
        content: 'pageGTR.isCompletelySafe',
      },
      {
        header: 'pageGTR.CanMonteChip',
        content: 'pageGTR.noLimitations',
      },
      {
        header: 'pageGTR.Howtoinstall',
        content: 'pageGTR.Plug&Play',
      },
      {
        header: 'pageGTR.WhatisMonte',
        content: 'pageGTR.byPurchasing',
      },
      {
        header: 'pageGTR.HowManyVehicles',
        content: 'pageGTR.currentВatabase',
      },
      {
        header: 'pageGTR.notListed',
        content: 'pageGTR.compatibleWith',
      },
    ],
  },
}
