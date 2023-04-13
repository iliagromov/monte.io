import { CaretRightOutlined } from '@ant-design/icons'
import { Collapse as AntCollapse } from 'antd'
import {
  CollapsePanelProps as AntCollapsePanelProps,
  CollapseProps as AntCollapseProps,
} from 'antd/lib/collapse'
import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import './style.scss'

const { Panel } = AntCollapse

type CollapsePanelProps = Omit<AntCollapsePanelProps, 'key'> & {
  content: string
}

type FaqListProps = AntCollapseProps & {
  items: CollapsePanelProps[]
}

const FaqList: FC<FaqListProps> = ({ items, ...restProps }) => {
  const intl = useIntl()

  const renderPanels = items.map(({ header, content }, i) => {
    const key = typeof header === 'string' ? `${i}_${header}` : `${i}_panel`
    const i18nContent = intl.formatMessage({ id: content })
    const i18nHeader = <FormattedMessage id={`${header}`} />

    return (
      <Panel header={i18nHeader} key={key} className="faq-list__item">
        <div
          className="faq-list__item-content"
          dangerouslySetInnerHTML={{ __html: i18nContent }}
        />
      </Panel>
    )
  })

  return (
    <AntCollapse
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="faq-list"
      {...restProps}
    >
      {renderPanels}
    </AntCollapse>
  )
}

export default FaqList
