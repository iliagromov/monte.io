import { RightOutlined } from '@ant-design/icons'
import cn from 'classnames'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Icon, IconProps } from '../../../../ui'
import './style.scss'

export type EdgeProps = {
  items: {
    icon: IconProps['name']
    title: string
    descr: string
    linkHref: string
  }[]
}

const Edge: FC<EdgeProps> = ({ items }) => {
  const renderItems = items.map(({ icon, title, descr, linkHref }, i) => (
    <div className="col-md-6 edge__item" key={`${i}_${title}`}>
      <div className="item-edge">
        <Icon
          name={icon}
          className={cn('item-edge__icon', {
            [`item-edge__icon--${icon}`]: icon,
          })}
        />
        <div className="item-edge__title h3">
          <FormattedMessage id={title} />
        </div>
        <div className="item-edge__descr">
          <FormattedMessage id={descr} />
        </div>
        {/* <Link className="item-edge__link" to={linkHref}>
          <FormattedMessage id="pageMain.learnMoreAbout" />
          <RightOutlined className="item-edge__link-icon" />
        </Link> */}
      </div>
    </div>
  ))

  return (
    <section className="section edge">
      <div className="container">
        <div className="row edge__list">{renderItems}</div>
      </div>
    </section>
  )
}

export default Edge
