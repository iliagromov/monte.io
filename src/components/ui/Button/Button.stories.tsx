import { Meta, Story } from '@storybook/react'
import React from 'react'
import Button, { ButtonProps } from '.'
// @ts-ignore
import docs from './docs.md'

const btnTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text']

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component: docs,
      },
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: btnTypes,
      },
      description: btnTypes.join(' | '),
      defaultValue: 'primary',
    },
  },
} as Meta

const DefaultStory: Story<ButtonProps> = args => <Button {...args} />

export const Default: typeof DefaultStory = DefaultStory.bind({})
Default.args = {
  children: 'test',
  block: false,
  href: '#',
}
