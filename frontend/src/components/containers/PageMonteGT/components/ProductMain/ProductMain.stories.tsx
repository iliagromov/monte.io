import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ProductMain, ProductMainProps } from '.'
import { ProductIds } from '../../../types/product'

export default {
  title: 'Components/ProductMain',
  component: ProductMain,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta

const DefaultStory: Story<ProductMainProps> = args => <ProductMain {...args} />

export const Default: Story<ProductMainProps> = DefaultStory.bind({})

// todo: подружить сторибук с gatsby-image-plugin
Default.args = {
  id: ProductIds.gtr,
  btnText: 'Shop now',
  btnHref: '#',
  advantages: [
    {
      icon: 'increase',
      text: 'Up to +25 HP* +25NM*',
    },
    {
      icon: 'fuel',
      text: ' +18% fuel saving*',
    },
    {
      icon: 'chat',
      text: 'Clear codes and display gauges',
    },
    {
      icon: 'chat',
      text: 'Buil-in dyno machine',
    },
  ],
  title: 'Introducing Monte GTR',
  descr: 'Performance tuning & on-board diagnistics · Made in USA',
}

// Default.storyName = 'I am the primary'
