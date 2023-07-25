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




interface ServerDataProps {
  page: PageSSR
}

interface ServerData {
  props: ServerDataProps
}
interface Params {
  slug: string
}

interface Context {
  params: Params
}


/// I added a default slug because there is a bug where the params do not get passed
const getProductsAndGetServerData = async ({
  params: { slug = 'acura' },
}: Context): Promise<ServerData> => {
  const page: PageSSR = await getPageDataServerSide(slug);

  return Promise.resolve({
    props: { 
      page 
    },
    status: 200,
  });

}

const getErrorServerData = () => {
  return {
    headers: {
      status: 500,
    },
    props: {},
  }
}

export const getServerData = async (context: Context) => {
  // const slug = props.params["slug"];
  try {
    return getProductsAndGetServerData(context)
  } catch (error) {
    console.error(error)
    return getErrorServerData()
  }
}


const ServerSideRenderedPage = ({serverData, location}: {serverData: ServerDataProps, location: any}) => {
  // console.log("🚀 ~ file: index.tsx:9 ~ serverData:", serverData);
  const PageData = serverData.page.context.pageData;
  const isStore = serverData.page.template === "store";
  

  // return (
  //   <div>
  //     <h1>SSR</h1>
  //     <pre>{JSON.stringify(PageData, null, 2)}</pre>
  //   </div>
  // )
  if (isStore) {
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
    return (
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

export default ServerSideRenderedPage
