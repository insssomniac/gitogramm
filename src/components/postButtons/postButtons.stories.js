import postButtons from './postButtons.vue'

export default {
  title: 'postButtons',
  component: { postButtons },
  argTypes: {
    stars: {
      control: { type: 'text' }
    },
    forks: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { postButtons },
  data () {
    return { args }
  },
  template: `
      <postButtons v-bind="args" />
  `
})

export const Default = template.bind({})

Default.args = {
  stars: '156k',
  forks: '4'
}
