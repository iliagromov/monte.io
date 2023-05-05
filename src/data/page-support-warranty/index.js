const faqSection = {
  title: 'pageSupportWarranty.faqTitle',
  items: [
    {
      header: 'pageSupportWarranty.shipWorldwide',
      content: 'pageSupportWarranty.withDHL',
    },
    {
      header: 'pageSupportWarranty.shippingCost',
      content: 'pageSupportWarranty.freeShipping',
    },
    {
      header: 'pageSupportWarranty.returnPolicy',
      content: 'pageSupportWarranty.moneyBack',
    },
    {
      header: 'whoPays.title',
      content: 'whoPays.description',
    },
  ],
}

const returnProcess = {
  title: 'returnProcess.title',
  steps: [
    {
      icon: 'printer',
      stepNumber: 1,
      description: 'returnProcess.step1Description',
      link: {
        slug:
          'https://storage.yandexcloud.net/monte-storage/resources/files/RMF.pdf',
        text: 'returnProcess.linkText',
      },
    },
    {
      icon: 'open-box',
      stepNumber: 2,
      description: 'returnProcess.step2Description',
    },
    {
      icon: 'purse',
      stepNumber: 3,
      description: 'returnProcess.step3Description',
    },
  ],
}

module.exports = {
  title: 'pageSupportWarranty.title',
  faqSection,
  returnProcess,
}
