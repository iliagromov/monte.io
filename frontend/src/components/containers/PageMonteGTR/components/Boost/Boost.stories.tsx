import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Boost, BoostProps } from './Boost'

export default {
  title: 'modules/PageMonteGTR/Boost',
  component: Boost,
} as Meta

const DefaultStory: Story<BoostProps> = args => <Boost {...args} />

export const Default: Story<BoostProps> = DefaultStory.bind({})
Default.args = {}
