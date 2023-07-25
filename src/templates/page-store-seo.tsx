import React from "react";
import Layout from "../layouts/Default/en";
import SEO from "../components/common/seo";
import { Footnote, Section } from "../components/ui";
import { GainCalculatorStoreSEO } from "../components/common/GainCalculator/GainCalculatorStoreSEO";
import disclaimerData from '../data/disclaimer'
import { FormattedMessage } from "react-intl";

// TODO: сделать типы pageData
export default function BlogPost({ pageContext: { pageData }, location }) {
  // console.log("🚀 ~ file: page-store-seo.tsx:11 ~ BlogPost ~ pageData:", pageData)
  const TitleSEO = pageData.title;
  const DescriptionSEO = pageData.description;
  const Canonical = pageData.canonical;
  const keyword = pageData.titleH1;
  const keywordBrand = pageData.brand;
  return (
    <Layout location={location}>
      <SEO
        title={TitleSEO}
        description={DescriptionSEO}
        isCanonical={true}
        linkCanonical={Canonical}
      />

      {/* TODO: сделать определение машины, когда меняется url  */}
      <>
        <Section mod="pt-lg" withContainer>
          <GainCalculatorStoreSEO
            pageData={pageData}
          />
          <section className='post-text post-content'>
            <div className="container">
              The Monte GT <strong>{keyword}</strong> is an OBD2 performance chip that offers six driving modes, app control, and a lifetime warranty. Made in the USA, this chip is safe for your car's warranty and is designed to improve the performance of your <strong>{keywordBrand}</strong> vehicle. Whether you're looking for increased horsepower, better fuel economy, or improved overall performance, the Monte GT has you covered and yours <strong>{keyword}</strong>.
              One of the standout features of the Monte GT is its six driving modes, which allow you to customize your car's performance to suit your needs. Whether you're looking for a sportier driving experience or better fuel efficiency, the Monte GT can adapt to your preferences. And with the ability to control the chip using an app, you can make adjustments on the fly.
              Another major benefit of the Monte GT is its lifetime warranty. This chip is built to last, and the manufacturer stands behind its product. This means you can enjoy the benefits of improved performance without having to worry about costly repairs or replacements.
              When it comes to performance chips for <strong>{keywordBrand}</strong> cars, the Monte GT is a top choice. With its advanced technology, customizable settings, and lifetime warranty, it's no wonder why car enthusiasts are making the switch to Monte GT. Upgrade your <strong>{keyword}</strong> with the Monte GT performance chip and experience the difference in performance and driving sensation today."
            </div>
          </section>
        </Section>

        <Footnote withContainer className="mt-md-5 mb-5 mb-md-3">


          <FormattedMessage id={disclaimerData.text} />
        </Footnote>
      </>

    </Layout>
  )
}
