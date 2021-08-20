import userBlockSmall from './userBlockSmall.vue'

export default {
  title: 'userBlockSmall',
  component: { userBlockSmall },
  argTypes: {
    avatar: {
      control: { type: 'text' }
    },
    username: {
      control: { type: 'text' }
    },
    variant: {
      options: ['card', 'none'],
      control: { type: 'radio' }
    }
  }
}

const template = (args) => ({
  components: { userBlockSmall },
  data () {
    return { args }
  },
  template: `
    <user-block-small v-bind="args" />
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: 'https://picsum.photos/50/50',
  username: 'John Doe'
}
