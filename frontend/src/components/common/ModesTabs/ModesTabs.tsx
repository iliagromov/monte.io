import React, { FC } from 'react'
import { Tabs } from 'antd'
import { TabsProps as AntdTabsProps } from 'antd/lib/tabs'

import './style.scss'

const { TabPane } = Tabs

export type ModeProps = {
  id: string
  title: string
}

export type ModesTabsProps = AntdTabsProps & {
  modes: ModeProps[]
}

const ModesTabs: FC<ModesTabsProps> = ({ modes, ...restProps }) => {
  const renderTabs = modes.map(({ id, title }) => (
    <TabPane tab={title} key={id} />
  ))

  return (
    <Tabs
      prefixCls="mode-tabs"
      defaultActiveKey={modes[0].id}
      tabBarGutter={0}
      {...restProps}
    >
      {renderTabs}
    </Tabs>
  )
}

export default ModesTabs
