import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import 'antd/es/dropdown/style'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import { Icon } from '../../../../components/ui'
import './style.scss'

type SelectLanguageProps = {
  langs: any
}

export const SelectLanguage: FC<SelectLanguageProps> = ({ langs }) => {
  const currentLang: string = langs.find(({ selected }) => selected)?.langKey

  const menu = (
    <Menu className="select-language__menu">
      {langs.map(({ selected, langKey, link }) => (
        <Menu.Item key={langKey} data-selected={selected}>
          <Link className="select-language__menu-link" to={link} key={langKey}>
            {langKey}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <a className="select-language" onClick={e => e.preventDefault()}>
        <Icon name="global" className="select-language__icon mr-2" />
        {currentLang}
        <DownOutlined className="ml-2" />
      </a>
    </Dropdown>
  )
}
