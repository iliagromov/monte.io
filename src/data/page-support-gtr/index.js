const faqSection = {
  title: 'pageSupportGTR.faqTitle',
  items: [
    {
      header: 'pageSupportGTR.WhatIs',
      content: 'pageSupportGTR.anUmbrella',
    },
    {
      header: 'pageSupportGTR.HowDoes',
      content: 'pageSupportGTR.algorithmContains',
    },
    {
      header: 'pageSupportGTR.WhatIsMonteGTR',
      content: 'pageSupportGTR.tuningKit',
    },
    {
      header: 'pageSupportGTR.liveGauges',
      content: 'pageSupportGTR.130different',
    },
    {
      header: 'pageSupportGTR.cloudUpdates',
      content: 'pageSupportGTR.updateEvery',
    },
    {
      header: 'pageSupportGTR.IsItSafe',
      content: 'pageSupportGTR.completelySafe',
    },
    {
      header: 'pageSupportGTR.vehiclesSupport',
      content: 'pageSupportGTR.over8000',
    },
    {
      header: 'pageSupportGTR.notListed',
      content: 'pageSupportGTR.compatibleAll',
    },
    {
      header: 'pageSupportGTR.drainBattery',
      content: 'pageSupportGTR.automatically',
    },
    {
      header: 'pageSupportGTR.accelerationMeter',
      content: 'pageSupportGTR.thisDepends',
    },
    {
      header: 'pageSupportGTR.warranty',
      content: 'pageSupportGTR.ECU',
    },
  ],
}

const installationFaqSection = {
  title: 'pageSupportGTR.faqInstallationTitle',
  items: [
    {
      header: 'pageSupportGTR.howInstall',
      content: 'pageSupportGTR.Plug&Play',
    },
    {
      header: 'pageSupportGTR.splitter',
      content: 'pageSupportGTR.doNOTuse',
    },
    {
      header: 'pageSupportGTR.anotherVehicle',
      content: 'pageSupportGTR.noLimitations',
    },
  ],
}

const monteProgrammerFaqSection = {
  title: 'pageSupportGTR.faqMonteProgrammerTitle',
  items: [
    {
      header: 'pageSupportGTR.programmer',
      content: 'pageSupportGTR.software',
    },
    {
      header: 'pageSupportGTR.OS',
      content: 'pageSupportGTR.windows',
    },
  ],
}

module.exports = {
  navigationElements: [
    {
      title: 'pageSupportGTR.faqTitle',
      key: 'faq',
      sectionData: {
        ...faqSection,
      },
    },
    {
      title: 'pageSupportGTR.faqInstallationTitle',
      key: 'installation',
      sectionData: {
        ...installationFaqSection,
      },
    },
    {
      title: 'pageSupportGTR.faqMonteProgrammerTitle',
      key: 'monteProgrammer',
      sectionData: {
        ...monteProgrammerFaqSection,
      },
    },
  ],
}
