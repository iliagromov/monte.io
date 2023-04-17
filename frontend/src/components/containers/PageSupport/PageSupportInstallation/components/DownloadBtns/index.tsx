import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import './style.scss'

type DownloadBtnsProps = {}

const DownloadBtns: FC<DownloadBtnsProps> = () => {
  const { englishPdf, spanishPdf } = useStaticQuery(graphql`
    query {
      englishPdf: file(relativePath: { eq: "english.pdf" }) {
        publicURL
        name
      }
      spanishPdf: file(relativePath: { eq: "spanish-2.pdf" }) {
        publicURL
        name
      }
    }
  `)

  return (
    <section className="download-btns section">
      <ul>{}</ul>
      <div className="container">
        <div className="download-btns-inner">
          <a
            className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg ant-btn-custom download-btns__btn"
            href={englishPdf.publicURL}
            download
          >
            <span>Download Manual English</span>
          </a>
          <a
            className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg ant-btn-custom download-btns__btn"
            href={spanishPdf ? spanishPdf.publicURL : ''}
            download
          >
            <span>Download Manual Española</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default DownloadBtns
