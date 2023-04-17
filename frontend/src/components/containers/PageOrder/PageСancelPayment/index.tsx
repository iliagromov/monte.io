import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { ReactSVG } from 'react-svg'
import { Button } from '../../../ui'

const PageСancelPayment: FC = () => {
  const { svg } = useStaticQuery(graphql`
    query {
      svg: file(relativePath: { eq: "warning.svg" }) {
        publicURL
        name
      }
    }
  `)

  return (
    <section className="section">
      <div className="container">
        <div className="payment-results payment-results--full-height">
          <div className="container payment-results__container">
            <i className="payment-results__icon payment-results__icon--error">
              <ReactSVG className="svg-icon" src={svg.publicURL} />
            </i>
            <div className="payment-results__title">Payment error!</div>
            <div className="payment-results__text">
              Payment was unseccessful. Your credit card was not charged.
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

export default PageСancelPayment
