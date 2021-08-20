import xProgress from './xProgress.vue'

export default {
  title: 'xProgress',
  component: { xProgress },
  argTypes: {
    onfinish: {
      action: 'onFinish',
      description: 'progress reached the end'
    }
  }
}

const template = (args) => ({
  components: { xProgress },
  data () {
    return { args }
  },
  template: `
    <x-progress @onFinish="args.onfinish" />
  `
})

export const Default = template.bind({})
