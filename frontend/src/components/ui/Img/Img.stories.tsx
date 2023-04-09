import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Img, ImgProps } from './Img'

export default {
  title: 'UI/Img',
  component: Img,
} as Meta

const DefaultStory: Story<ImgProps> = args => <Img {...args} />

export const Default: Story<ImgProps> = DefaultStory.bind({})
Default.args = {
  src: 'https://via.placeholder.com/300x300',
  style: { width: 300 },
  ratio: '1x1',
}

export const WithSrcSet: Story<ImgProps> = DefaultStory.bind({})
WithSrcSet.args = {
  srcset: {
    desktop: 'https://via.placeholder.com/300x300',
    mobile: 'https://via.placeholder.com/200x200',
  },
  style: { width: 300 },
  ratio: '1x1',
}
