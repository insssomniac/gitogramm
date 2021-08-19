import postButtons from './postButtons.vue'

export default {
  title: 'postButtons',
  component: { postButtons },
  argTypes: {
    quantity: {
      control: { type: 'text' }
    },
    ownQuantity: {
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
  quantity: '156k',
  ownQuantity: '4'
}
