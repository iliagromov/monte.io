import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import './style.scss'

type DownloadBtnsProps = {}

const DownloadBtns: FC<DownloadBtnsProps> = () => {
 
  const englishPdf = 'https://drive.google.com/file/d/1axNmrT79F4mclbWuxqPBb6WvJbTgfYsY/view?usp=drive_link';
    const spanishPdf = 'https://drive.google.com/file/d/1H_cmZffDPdu4N9TjWZE-eSz1rzfAkqN8/view';


  return (
    <section className="download-btns section">
      <ul>{}</ul>
      <div className="container">
        <div className="download-btns-inner">
          <a
            className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg ant-btn-custom download-btns__btn"
            href={englishPdf}
            download
            target='_blank'
          >
            <span>Download Manual English</span>
          </a>
          <a
            className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg ant-btn-custom download-btns__btn"
            href={spanishPdf}
            download
            target='_blank'
          >
            <span>Download Manual Española</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default DownloadBtns
