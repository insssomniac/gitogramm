import logo from './logo.vue'

export default {
  title: 'logo',
  component: { logo },
  argTypes: {
    variant: {
      options: ['logo-black', 'logo-white'],
      control: { type: 'radio' }
    }
  }
}

const template = (args) => ({
  components: { logo },
  data () {
    return { args }
  },
  template: `
    <logo v-bind="args" />
  `
})

export const Default = template.bind({})

Default.args = {
  variant: 'logo-black'
}
