import userBlock from './userBlock.vue'

export default {
  title: 'userBlock',
  component: { userBlock },
  argTypes: {
    avatar: {
      control: { type: 'text' }
    },
    username: {
      control: { type: 'text' }
    },
    variant: {
      options: ['profile-picture-big', 'followed-user-item', 'card', 'none'],
      control: { type: 'radio' }
    }
  }
}

const template = (args) => ({
  components: { userBlock },
  data () {
    return { args }
  },
  template: `
    <user-block v-bind="args" />
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: 'https://picsum.photos/50/50',
  username: 'John Doe'
}
