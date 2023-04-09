import React, { FC } from 'react'

import AddMenu from '../../common/AddMenu'
import { items as aboutMenu } from '../../../data/about-menu';

export type PageAbout = {}

export const PageAbout: FC<PageAbout> = () => {
  return (
    <>
      <AddMenu items={aboutMenu as any} />
      <section className="section">
        <div className="container">
          <h1>Page About</h1>
        </div>
      </section>
    </>
  )
}

export default PageAbout
