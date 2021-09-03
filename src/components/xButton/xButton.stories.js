import xButton from './xButton.vue'

export default {
  title: 'xButton',
  component: { xButton },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    },
    variant: {
      options: ['button--big', 'none'],
      control: { type: 'radio' }
    },
    theme: {
      options: ['button--theme-green', 'button--theme-grey'],
      control: { type: 'radio' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
}

const template = (args) => ({
  components: { xButton },
  data () {
    return { args }
  },
  template: `
    <xButton v-bind="args">Follow</xButton>
  `
})

export const Default = template.bind({})

Default.args = {
  variant: 'none',
  theme: 'button--theme-green',
  loading: false,
  disabled: false
}
