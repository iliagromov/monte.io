const installattionInfoList = [
  {
    icon: 'clock',
    textId: 'installationInfoList.infoItem1Text',
  },
  {
    icon: 'wrench',
    textId: 'installationInfoList.infoItem2Text',
  },
  {
    icon: 'wrench',
    textId: 'installationInfoList.infoItem3Text',
  },
]

const videoSection = {
  title: 'supportVideoSection.videoTitle',
  youTubeId: 'PLmjexxCssc',
}

const downloadProgrammer = {
  title: 'downloadProgrammer.title',
  features: [
    {
      text: 'downloadProgrammer.feature1Text',
    },
    {
      text: 'downloadProgrammer.feature2Text',
    },
  ],
  buttonText: 'downloadProgrammer.buttonText',
  buttonHref:
    'https://chqapps.blob.core.windows.net/monteprogrammer/monteprogrammer.html',
  comment: 'downloadProgrammer.comment',
}

const faq = {
  title: 'supportInstallationFaq.title',
  items: [
    {
      header: 'supportInstallationFaq.question1',
      content: 'supportInstallationFaq.answer1',
    },
    {
      header: 'supportInstallationFaq.question2',
      content: 'supportInstallationFaq.answer2',
    },
  ],
}

module.exports = {
  title: 'pageSupportInstallation.pageTitle',
  installattionInfoList,
  videoSection,
  downloadProgrammer,
  faq,
}
