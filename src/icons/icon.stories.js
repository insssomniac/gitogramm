import icon from './icon.vue'

export default {
  title: 'icon',
  component: { icon },
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['exit', 'fork', 'home', 'star', 'triangle']
      }
    }
  }
}

const template = (args) => ({
  components: { icon },
  data () {
    return { args }
  },
  template: `
    <icon class="icons-default" v-bind="args" />
  `
})

export const Default = template.bind({})

Default.args = {
  name: 'star'
}
