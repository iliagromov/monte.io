import React, { FC, useEffect } from 'react'
import { Section } from '../../ui'

export type RedirectProps = {
  path: string
}

export const Redirect: FC<RedirectProps> = ({ path }) => {
  useEffect(() => {
    ;(window as any).location = path
  }, [])

  return (
    <Section withContainer>
      <p>
        You will be automatically redirected to <b>{path}</b>...
      </p>
      <p>
        If it does not happened you can do it <a href={path}>manually</a>
      </p>
    </Section>
  )
}
