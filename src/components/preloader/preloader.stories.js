import preloader from './preloader.vue'

export default {
  title: 'preloader',
  component: { preloader },
  argTypes: {
    variant: {
      options: ['preloader--green', 'preloader--white'],
      control: { type: 'radio' }
    }
  }
}

const template = (args) => ({
  components: { preloader },
  data () {
    return { args }
  },
  template: `
    <div class="preloader">
      <preloader v-bind="args"/>
    </div>
    
  `
})

export const Default = template.bind({})

Default.args = {
  variant: 'preloader--green'
}
