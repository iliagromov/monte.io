import { Story } from '@storybook/react'
import React from 'react'
import { Icon, IconProps, iconsMap } from '.'

const icons = Object.keys(iconsMap) as Array<keyof typeof iconsMap>

export default {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: icons,
      },
      defaultValue: 'arrow-back',
    },
  },
}

const DefaultStory: Story<IconProps> = args => <Icon {...args} />

export const Default: Story<IconProps> = DefaultStory.bind({})

const IconsListStory: Story = () => {
  const iconStyle = {
    fontSize: '2rem',
  }

  const renderIcons = icons.map(iconName => (
    <div className="col-6 col-sm-4 col-md-3 col-xl-2 mt-3" key={iconName}>
      <code className="mb-2 d-block">{iconName}</code>
      <Icon
        name={iconName}
        title={iconName}
        className="d-block"
        style={iconStyle}
      />
    </div>
  ))

  return (
    <div className="container">
      <h2>Icons list</h2>
      <div className="row">{renderIcons}</div>
    </div>
  )
}
export const IconsList = IconsListStory.bind({})
// Default.storyName = 'I am the primary'
