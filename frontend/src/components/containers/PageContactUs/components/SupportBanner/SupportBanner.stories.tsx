import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SupportBanner, SupportBannerProps } from './SupportBanner'

export default {
  title: 'Components/SupportBanner',
  component: SupportBanner,
  argTypes: {
    title: {
      description: 'string',
    },
    img: {
      description: `{
        desktop: string
        desktop2x: string
      }`,
    },
  },
} as Meta

const DefaultStory: Story<SupportBannerProps> = args => {
  return (
    <section className="section">
      <div className="container ">
        <SupportBanner {...args} />
      </div>
    </section>
  )
}

export const Default = DefaultStory.bind({})

Default.args = {
  title: 'Our support team is always ready to help',
  img: {
    desktop:
      'https://storage.yandexcloud.net/monte-storage/resources/images/support-desktop.jpg',
    desktop2x:
      'https://storage.yandexcloud.net/monte-storage/resources/images/support-desktop%402x.jpg',
  },
}
