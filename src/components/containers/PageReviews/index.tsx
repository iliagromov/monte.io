import { Link, graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import React, { FC } from 'react'

import './style.scss'


type PageSingleNewsProps = {
  postProps: any
}

const PageReviews: FC<PageSingleNewsProps> = () => {

  return (
    <article className="section ">
    PageReviews
    </article>
  )
}

export default PageReviews
