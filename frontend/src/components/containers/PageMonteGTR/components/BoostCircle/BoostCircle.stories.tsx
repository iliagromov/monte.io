import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BoostCircle, BoostCircleProps } from './BoostCircle'

export default {
  title: 'modules/PageMonteGTR/BoostCircle',
  component: BoostCircle,
} as Meta

const DefaultStory: Story<BoostCircleProps> = args => <BoostCircle {...args} />

export const Default: Story<BoostCircleProps> = DefaultStory.bind({})
Default.args = {
  percentage: '80',
  value: '25',
  descr: 'Up to +25% more power',
}
