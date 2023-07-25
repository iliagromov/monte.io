import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'

import { getPageDataServerSide } from '../../hooks/usePageDataServerSide';
import { PageSSR } from '../../types/page';
import { PageSingleSEOContainer } from '../../components/containers/PageSingleSEO/PageSingleSEO';
import { Footnote, Section } from '../../components/ui';
import { GainCalculatorStoreSEO } from '../../components/common/GainCalculator/GainCalculatorStoreSEO';
import { FormattedMessage } from 'react-intl';
import disclaimerData from '../../data/disclaimer'

type serverDataProps = {
  pageMetadata: PageSSR
}

// TODO: Сделать типы для serverData pageMetadata
const Page: FC<PageProps> = ({ serverData, location }) => {
  // console.log("🚀 ~ file: index.tsx:9 ~ serverData:", serverData)

  const PageData = serverData?.pageMetadata.context.pageData;
  const isStore = serverData?.pageMetadata.template === "store";
  // console.log("🚀 ~ file: [slug].tsx:22 ~ isStore:", isStore)

  if(isStore){
    return (
      <Layout location={location}>
      <SEO 
      title={PageData.title}
      description={PageData.description}
      isCanonical={true}
      linkCanonical={PageData.canonical}
      />
       
      {/* TODO: сделать определение машины, когда меняется url  */}
      <>
        <Section mod="pt-lg" withContainer>
          <GainCalculatorStoreSEO 
          pageData={PageData}
          />
        </Section>

        <Footnote withContainer className="mt-md-5 mb-5 mb-md-3">
          <FormattedMessage id={disclaimerData.text} />
        </Footnote>
      </>

    </Layout>
    )
  } else {
    return(
      <Layout location={location}>
        <SEO
          title={PageData.title}
          description={PageData.description}
        />
        <PageSingleSEOContainer 
      pageProps={PageData}
      />
      
      </Layout>
      )
  }
  
  
}

export default Page


export async function getServerData(props) {
  const slug = props.params["slug"];
  // console.log("🚀 ~ file: [slug].tsx:40 ~ getServerData ~ slug:", slug)


  try {
    let pageMetadata:PageSSR = await getPageDataServerSide(slug);
    return {
      props: pageMetadata,
      status: 200,
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {}
    }
  }
}