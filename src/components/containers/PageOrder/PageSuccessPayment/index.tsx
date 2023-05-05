import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { Button } from '../../../ui'
import { ReactSVG } from 'react-svg'

import './index.scss'

const PageSuccessPayment: FC = () => {
  const { svg } = useStaticQuery(graphql`
    query {
      svg: file(relativePath: { eq: "checked.svg" }) {
        publicURL
        name
      }
    }
  `)

  // console.log(svg)
  return (
    <section className="PageSuccessPayment section">
      <div className="container">
        <div className="payment-results payment-results--full-height">
          <div className="container payment-results__container">
            <i className="payment-results__icon payment-results__icon--error">
              <ReactSVG className="svg-icon" src={svg.publicURL} />
            </i>
            <div className="payment-results__title">Payment successful!</div>
            <div className="payment-results__text">
              Your payment information has been sent to your email.
            </div>
            <div className="payment-results__btn">
              <Button href={'/'} className="payment-results__btn " block>
                <span>Go back</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageSuccessPayment
