import React, { FC } from 'react'

import './style.scss'

export type BadgeNewProps = {
  text: string
}

export const Badge: FC<BadgeNewProps> = ({ text }) => {
  return <span className="badge">{text}</span>
}

export default Badge
