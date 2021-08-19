import loggedAs from './loggedAs.vue'

export default {
  title: 'loggedAs',
  component: { loggedAs },
  argTypes: {
    avatar: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { loggedAs },
  data () {
    return { args }
  },
  template: `
    <loggedAs v-bind="args" />
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: 'https://picsum.photos/50/50'
}
