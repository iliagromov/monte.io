import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import {
  downloadProgrammer,
  faq,
  installattionInfoList,
  title,
  videoSection,
} from '../../../../data/page-support-installation'
import { items as menuItems } from '../../../../data/support-menu'
import AddMenu from '../../../common/AddMenu'
import FaqSection from '../../../common/Faq'
import FaqList from '../../../common/FaqList'
import { Video } from '../../../common/Video'
import DownloadBtns from './components/DownloadBtns'
import DownloadProgrammer from './components/DownloadProgrammer'
import {
  InfoItem,
  InstallationInfoList,
} from './components/InstallationInfoList'

type PageSupportInstallationProps = {}

const PageSupportInstallation: FC<PageSupportInstallationProps> = () => {
  const { installationVideoPreview, downloadImage } = useStaticQuery(graphql`
    query {
      installationVideoPreview: file(relativePath: { eq: "gtr-install.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1040, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      downloadImage: file(relativePath: { eq: "chip-and-settings.png" }) {
        childImageSharp {
          fluid(maxWidth: 1040, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <>
      <AddMenu mod="sticky" items={menuItems as any} />
      <section className="section">
        <div className="container">
          <h2 className="h1 mb-5">
            <FormattedMessage id={title} />
          </h2>
          <InstallationInfoList
            infoItems={installattionInfoList as InfoItem[]}
          />
        </div>
      </section>
      <section className="section pt-4">
        <div className="container">
          <h2 className="text-center h2 mb-4">
            <FormattedMessage id={videoSection.title} />
          </h2>
          <Video
            preview={installationVideoPreview.childImageSharp.fluid}
            youTubeId={videoSection.youTubeId}
            imgStyle={{
              objectPosition: 'left center',
            }}
          />
        </div>
      </section>
      <DownloadProgrammer
        titleId={downloadProgrammer.title}
        features={downloadProgrammer.features}
        buttonText={downloadProgrammer.buttonText}
        buttonHref={downloadProgrammer.buttonHref}
        comment={downloadProgrammer.comment}
        imgSourses={downloadImage.childImageSharp.fluid}
      />
      <DownloadBtns />
      <FaqSection title={faq.title} smallTitle>
        <FaqList items={faq.items} />
      </FaqSection>
    </>
  )
}

export default PageSupportInstallation
