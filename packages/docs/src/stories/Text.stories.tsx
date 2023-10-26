import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium suscipit sequi numquam harum cum porro necessitatibus modi quae sit quis voluptate, accusamus accusantium, veritatis aut nesciunt et omnis quidem architecto.,',
  },
} as Meta<TextProps>
export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}