import userBlock from './storyBlock.vue'

export default {
  title: 'userBlock',
  component: { userBlock },
  argTypes: {
    avatar: {
      control: { type: 'text' }
    },
    username: {
      control: { type: 'text' }
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
