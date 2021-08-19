import comment from './comment.vue'

export default {
  title: 'comment',
  component: { comment },
  argTypes: {
    username: {
      control: { type: 'text' }
    },
    text: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { comment },
  data () {
    return { args }
  },
  template: `
    <comment v-bind="args" />
  `
})

export const Default = template.bind({})

Default.args = {
  username: 'joshua_l',
  text: 'Enable performance measuring in production, at the user\'s request'
}
